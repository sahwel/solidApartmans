import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { memo } from 'react'
import ReservationsContainer from '../../components/Admin/Reservations/ReservationsContainer'
import ReservationsFilter from '../../components/Admin/Reservations/ReservationsFilter'
import { validateExpire } from '../../services/userDefinitions'

const reservations = memo(function reservations() {
  return (
    <div className="flex overflow-hidden p-5">
      <ReservationsFilter />
      <ReservationsContainer />
    </div>
  )
})

export default reservations
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
