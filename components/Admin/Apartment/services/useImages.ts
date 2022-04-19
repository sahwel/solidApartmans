import { getSession } from 'next-auth/react'
import router from 'next/router'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import {
  UseFormGetValues,
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form'
import { AdminApartmentDefinitions } from '../../../../services/apartmentDefinitions'
import { axiosInstance } from '../../../../services/axiosInstance'
import { useToast } from '../../../Common/Toast/Toast'

export const useImages = (
  setValue: UseFormSetValue<AdminApartmentDefinitions>,
  setError: UseFormSetError<AdminApartmentDefinitions>,
  setImages: Dispatch<SetStateAction<string[]>>,
  setImagesHidden: Dispatch<SetStateAction<File[] | undefined>>
) => {
  const toast = useToast()

  const handleDeleteImg = useCallback(
    (index: number) => async () => {
      try {
        const session = await getSession()
        const { id } = router.query
        await axiosInstance.delete(`apartment/image/${id}/${index}`, {
          headers: { 'auth-token': session?.token as string },
        })
        /*  let newImages = [...images]
        newImages.splice(index, 1) */
        setImages((oldImages) => oldImages.splice(index, 1))
      } catch (error: any) {
        toast.error(
          error.response
            ? error.response.data
              ? error.response.data.msgHU
              : 'Egy hiba lépett fel a kérés közben!'
            : error
        )
      }
    },
    [setImages, toast]
  )

  const moveImg = useCallback(
    (index: number, isUp: boolean, toFirst: boolean) => async () => {
      try {
        const session = await getSession()
        const { id } = router.query
        await axiosInstance.patch(
          `apartment/image/${id}/${index}/${isUp}/${toFirst}`,
          {},
          {
            headers: { 'auth-token': session?.token as string },
          }
        )

        setImages((oldImages) => {
          const newImages = [...oldImages]
          const oldImg = newImages[toFirst ? 0 : index - (isUp ? 1 : -1)]
          newImages[toFirst ? 0 : index - (isUp ? 1 : -1)] = newImages[index]
          newImages[index] = oldImg
          return newImages
        })
      } catch (error: any) {
        toast.error(
          error.response
            ? error.response.data
              ? error.response.data.msgHU
              : 'Egy hiba lépett fel a kérés közben!'
            : error
        )
      }
    },
    [setImages, toast]
  )

  const handleAddImg = useCallback(
    (newImg: File) => {
      const reader = new FileReader()
      reader.readAsDataURL(newImg)
      reader.onloadend = function () {
        let newImage = reader.result?.toString()
        if (!newImage) setValue('image', '')
        else {
          setValue('image', 'true')
          setError('image', {
            message: undefined,
          })
        }
        setImagesHidden((oldImages) => {
          if (oldImages) return [...oldImages, newImg]

          const newImages: File[] = []
          newImages.push(newImg)
          return newImages
        })
        setImages((oldArray) => [...oldArray, newImage + ''])
      }
    },
    [setError, setImages, setImagesHidden, setValue]
  )
  return { handleAddImg, moveImg, handleDeleteImg }
}
