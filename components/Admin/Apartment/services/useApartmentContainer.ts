import { getSession } from 'next-auth/react'
import router from 'next/router'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import {
  AdminApartmentDefinitions,
  AdminFacility,
} from '../../../../services/apartmentDefinitions'
import { axiosInstance } from '../../../../services/axiosInstance'
import { useToast } from '../../../Common/Toast/Toast'

export const useApartmentContainer = (
  defaultValue: AdminApartmentDefinitions,
  facilities: AdminFacility[],
  images: File[] | undefined,
  isCreate: boolean
) => {
  const { register, handleSubmit, formState, setValue, setError, getValues } =
    useForm<AdminApartmentDefinitions>({
      defaultValues: { ...defaultValue },
    })
  const toast = useToast()
  const onSubmit = useCallback(
    async (data: AdminApartmentDefinitions) => {
      try {
        const formData = new FormData()
        formData.append('name', data.name)
        const session = await getSession()

        facilities.forEach((e) => formData.append('facilities', e._id))
        if (isCreate && images) {
          images.forEach((img) => {
            formData.append('images', img)
          })
        }

        formData.append('address[zip_code]', data.address.zip_code)
        formData.append('address[city]', data.address.city)
        formData.append('address[street]', data.address.street)
        formData.append('address[house_number]', data.address.house_number)
        formData.append('plusPrice', data.plusPrice.toString())
        formData.append('price', data.price.toString())
        formData.append('detailsEN', data.detailsEN)
        formData.append('detailsHU', data.detailsHU)
        formData.append('capacity[capacity]', data.capacity.capacity.toString())
        formData.append('capacity[bedrooms]', data.capacity.bedrooms.toString())
        if (isCreate) {
          await axiosInstance.post('apartment/', formData, {
            headers: { 'auth-token': session?.token as string },
          })
          router.push('/admin')
        } else {
          const { id } = router.query
          await axiosInstance.patch(
            `apartment/${id}`,
            {
              name: data.name,
              capacity: data.capacity,
              address: data.address,
              detailsEN: data.detailsEN,
              detailsHU: data.detailsHU,
              price: data.price,
              plusPrice: data.plusPrice,
              facilities: facilities
                .filter((e) => e.selected)
                .map((e) => e._id),
            },
            {
              headers: { 'auth-token': session?.token as string },
            }
          )
        }
      } catch (error: any) {
        toast.error(
          error.response
            ? error.response.data
              ? error.response.data.msgHU
                ? error.response.data.msgHU
                : error.response.data.msg
              : 'Egy hiba lépett fel a kérés közben!'
            : error
        )
      }
    },
    [facilities, images, isCreate, toast]
  )

  return {
    register,
    setError,
    handleSubmit,
    onSubmit,
    formState,
    setValue,
    getValues,
  }
}
