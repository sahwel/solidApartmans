import { useCallback, useState } from 'react'
import {
  UseFormGetValues,
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form'
import { AdminApartmentDefinitions } from '../../../../services/apartmentDefinitions'

export const useImages = (
  setValue: UseFormSetValue<AdminApartmentDefinitions>,
  setError: UseFormSetError<AdminApartmentDefinitions>,
  _images?: string[]
) => {
  const [images, setImages] = useState<string[]>(_images ? _images : [])
  const handleDeleteImg = useCallback(
    (index: number) => () => {
      let newImages = [...images]
      newImages.splice(index, 1)
      setImages(newImages)
    },
    [images]
  )

  const moveImg = useCallback(
    (index: number, isUp: boolean, toFirst: boolean) => () => {
      const newImages = [...images]
      const oldImg = newImages[toFirst ? 0 : index - (isUp ? 1 : -1)]
      newImages[toFirst ? 0 : index - (isUp ? 1 : -1)] = newImages[index]
      newImages[index] = oldImg
      setImages(newImages)
    },
    [images]
  )

  const handleAddImg = useCallback(
    (newImg: File) => {
      const newImages = [...images]
      const reader = new FileReader()
      reader.readAsDataURL(newImg)
      reader.onloadend = function () {
        newImages.unshift(reader.result?.toString() || '')
        if (newImages.length === 0) setValue('image', '')
        else {
          setValue('image', 'true')
          setError('image', {
            message: undefined,
          })
        }
        setImages(newImages)
      }
    },
    [images, setError, setValue]
  )
  return { handleAddImg, moveImg, images, handleDeleteImg }
}
