import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { AdminApartmentDefinitions } from '../../../services/apartmentDefinitions'

export const useApartmentContainer = (
  images: string[],
  defaultValue: AdminApartmentDefinitions
) => {
  const { register, handleSubmit, formState, setValue } =
    useForm<AdminApartmentDefinitions>({
      defaultValues: { ...defaultValue },
    })
  const { errors } = formState

  const onSubmit = useCallback((data: AdminApartmentDefinitions) => {
    console.log('asd')
  }, [])

  const handleImagesValidation = useCallback(() => {
    setValue('images', images)
  }, [images, setValue])

  return { register, handleSubmit, onSubmit, errors, formState }
}
