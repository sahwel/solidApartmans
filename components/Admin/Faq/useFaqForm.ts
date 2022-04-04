import { getSession } from 'next-auth/react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { axiosInstance } from '../../../services/axiosInstance'
import { Faq } from '../../../services/faqDefinitions'

export const useFaqForm = (
  isCreate: boolean,
  // eslint-disable-next-line no-unused-vars
  addFaq: (faq: Faq) => Promise<void>,
  // eslint-disable-next-line no-unused-vars
  deleteFaq: (_id: string) => void,
  faq?: Faq
) => {
  const { register, formState, handleSubmit } = useForm<Faq>({
    defaultValues: !isCreate ? { ...faq } : {},
  })

  const onSubmit = async (data: Faq) => {
    try {
      console.log(isCreate)
      const session = await getSession()

      isCreate
        ? addFaq(data)
        : await axiosInstance.patch(
            `faq/${faq?._id}`,
            { ...data },
            { headers: { 'auth-token': session?.token as string } }
          )
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = useCallback(() => {
    if (!faq) return
    deleteFaq(faq._id)
  }, [deleteFaq, faq])

  return { handleDelete, onSubmit, handleSubmit, register, formState }
}
