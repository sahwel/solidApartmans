import { getSession } from 'next-auth/react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { axiosInstance } from '../../../services/axiosInstance'
import { Faq } from '../../../services/faqDefinitions'
import { useToast } from '../../Common/Toast/Toast'

export const useFaqForm = (
  isCreate: boolean,
  addFaq: (faq: Faq) => Promise<void>,
  deleteFaq: (_id: string) => void,
  faq?: Faq
) => {
  const { register, formState, handleSubmit } = useForm<Faq>({
    defaultValues: !isCreate ? { ...faq } : {},
  })

  const toast = useToast()
  const onSubmit = async (data: Faq) => {
    try {
      const session = await getSession()

      isCreate
        ? addFaq(data)
        : await axiosInstance.patch(
            `faq/${faq?._id}`,
            { ...data },
            { headers: { 'auth-token': session?.token as string } }
          )
    } catch (error: any) {
      toast.error(
        error.response.data
          ? error.response.data.msg
          : 'Egy hiba lépett fel a kérés közben!'
      )
    }
  }

  const handleDelete = useCallback(() => {
    if (!faq) return
    deleteFaq(faq._id)
  }, [deleteFaq, faq])

  return { handleDelete, onSubmit, handleSubmit, register, formState }
}
