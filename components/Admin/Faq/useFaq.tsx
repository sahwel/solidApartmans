import { getSession } from 'next-auth/react'
import { useCallback, useState } from 'react'
import { axiosInstance } from '../../../services/axiosInstance'
import { Faq } from '../../../services/faqDefinitions'
import { useModal } from '../../Modal/ModalProvider'
import CreateFaq from './CreateFaq'

export const useFaq = (faqs: Faq[]) => {
  const [faqsInner, setFaqsInner] = useState<Faq[]>(faqs)

  const addFaq = useCallback(async (faq: Faq) => {
    try {
      const session = await getSession()
      await axiosInstance.post(
        `faq`,
        { ...faq },
        {
          headers: { 'auth-token': session?.token as string },
        }
      )

      setFaqsInner((oldState) => [...oldState, faq])
    } catch (error) {
      console.log(error)
    }
  }, [])

  const deleteFaq = useCallback(
    async (_id: string) => {
      try {
        const session = await getSession()
        await axiosInstance.delete(`faq/${_id}`, {
          headers: { 'auth-token': session?.token as string },
        })
        setFaqsInner(faqsInner.filter((el) => el._id !== _id))
      } catch (error) {
        console.log(error)
      }
    },
    [faqsInner]
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
