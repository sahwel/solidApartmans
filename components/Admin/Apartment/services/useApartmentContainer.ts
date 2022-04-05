import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { AdminApartmentDefinitions } from '../../../../services/apartmentDefinitions'

export const useApartmentContainer = (
  defaultValue: AdminApartmentDefinitions
) => {
  const { register, handleSubmit, formState, setValue, setError } =
    useForm<AdminApartmentDefinitions>({
      defaultValues: { ...defaultValue, image: 'yes' },
    })

  const onSubmit = useCallback((data: AdminApartmentDefinitions) => {
    console.log(data)
  }, [])

  return {
    register,
    setError,
    handleSubmit,
    onSubmit,
    formState,
    setValue,
  }
}
