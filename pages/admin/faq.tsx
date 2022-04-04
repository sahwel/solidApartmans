import { Button } from '../../components/Button'
import { FunctionComponent, memo } from 'react'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { validateExpire } from '../../services/userDefinitions'
import { Faq } from '../../services/faqDefinitions'
import { axiosInstance } from '../../services/axiosInstance'
import FaqsCotnainer from '../../components/Admin/Faq/FaqsCotnainer'
import { useFaq } from '../../components/Admin/Faq/useFaq'

interface FaqProps {
  faqs: Faq[]
}

const faq: FunctionComponent<FaqProps> = memo(
  function Faq({ faqs }) {
    const { openModal, faqsInner, deleteFaq } = useFaq(faqs)

    return (
      <div className="mx-auto my-8 grid w-1/2 gap-y-6">
        <div className="!mb-7 flex w-full justify-between">
          <h1 className="text-2xl font-bold">GY.I.K</h1>
          <Button
            title="Létrehozás"
            classNames="py-1 px-4 "
            onClick={openModal}
          />
        </div>
        <FaqsCotnainer faqs={faqsInner} deleteFaq={deleteFaq} />
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.faqs.length === newProps.faqs.length
      ? oldProps.faqs.every(
          (e, i) =>
            e.answerHU === newProps.faqs[i].answerHU &&
            e._id === newProps.faqs[i]._id &&
            e.questionHU === newProps.faqs[i].questionHU &&
            e.answerEN === newProps.faqs[i].answerEN &&
            e.questionEN === newProps.faqs[i].questionEN
        )
      : false
)

export default faq
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session || validateExpire(session.expires) || !session.token) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    }
  }

  const response = await axiosInstance.get('/faq/admin', {
    headers: { 'auth-token': session.token as string },
  })
  return {
    props: { ...response.data },
  }
}
