import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { memo } from 'react'
import ReviewsContainer from '../../components/Admin/Reviews/ReviewsContainer'
import ReviewsFilter from '../../components/Admin/Reviews/ReviewsFilter'
import { validateExpire } from '../../services/userDefinitions'

const reviews = memo(function Reviews() {
  return (
    <div className="flex overflow-hidden p-5">
      <ReviewsFilter />
      <ReviewsContainer />
    </div>
  )
})

export default reviews
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session || validateExpire(session.expires)) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}
