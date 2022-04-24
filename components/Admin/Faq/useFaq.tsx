import { getSession } from 'next-auth/react'
import { useCallback, useState } from 'react'
import { axiosInstance } from '../../../services/axiosInstance'
import { Faq } from '../../../services/faqDefinitions'
import { useToast } from '../../Common/Toast/Toast'
import { useModal } from '../../Modal/ModalProvider'
import CreateFaq from './CreateFaq'

export const useFaq = (faqs: Faq[]) => {
  const [faqsInner, setFaqsInner] = useState<Faq[]>(faqs)
  const toast = useToast()
  const addFaq = useCallback(
    async (faq: Faq) => {
      try {
        const session = await getSession()
        const newFaq = await axiosInstance.post(
          `faq`,
          { ...faq },
          {
            headers: { 'auth-token': session?.token as string },
          }
        )

        setFaqsInner((oldState) => [...oldState, { ...faq, _id: newFaq.data }])
        toast.success('Gyakori kérdés sikeresen létrehozva!')
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
    [toast]
  )

  const deleteFaq = useCallback(
    async (_id: string) => {
      try {
        const session = await getSession()
        await axiosInstance.delete(`faq/${_id}`, {
          headers: { 'auth-token': session?.token as string },
        })

        setFaqsInner((faqs) => faqs.filter((el) => el._id !== _id))
        toast.success('Gyakori kérdés sikeresen törölve!')
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
    [toast]
  )
  const modal = useModal()
  const openModal = useCallback(() => {
    modal.show(
      <CreateFaq addFaq={addFaq} />,
      <p className="text-lg font-medium">Létrehozás</p>
    )
  }, [addFaq, modal])

  return {
    openModal,
    faqsInner,
    deleteFaq,
  }
}
