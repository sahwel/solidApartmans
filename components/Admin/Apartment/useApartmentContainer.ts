import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { AdminApartmentDefinitions } from '../../../services/apartmentDefinitions'

export const useApartmentContainer = (
  defaultValue: AdminApartmentDefinitions
) => {
  const { register, handleSubmit, formState, setValue, setError } =
    useForm<AdminApartmentDefinitions>({
      defaultValues: { ...defaultValue },
    })
  const { errors } = formState

  const onSubmit = useCallback((data: AdminApartmentDefinitions) => {
    console.log('asd')
  }, [])

  return {
    register,
    setError,
    handleSubmit,
    onSubmit,
    errors,
    formState,
    setValue,
  }
}
