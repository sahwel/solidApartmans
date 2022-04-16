import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { FunctionComponent, memo, useState } from 'react'
import ReservationsContainer from '../../components/Admin/Reservations/ReservationsContainer'
import ReservationsFilter from '../../components/Admin/Reservations/ReservationsFilter'
import { ApartmentsNames } from '../../services/apartmentDefinitions'
import { axiosInstance } from '../../services/axiosInstance'
import { AdmiReservationModel } from '../../services/reservationsDefinitions'
import { validateExpire } from '../../services/userDefinitions'

interface ReservationsProps {
  _reservations: AdmiReservationModel[]
  apartments: ApartmentsNames[]
}

const reservations: FunctionComponent<ReservationsProps> = memo(
  function Reservations({ _reservations, apartments }) {
    const [reservations, setReservations] =
      useState<AdmiReservationModel[]>(_reservations)
    return (
      <div className="flex overflow-hidden p-5">
        <ReservationsFilter
          setReservations={setReservations}
          apartments={apartments}
        />
        <ReservationsContainer reservations={reservations} />
      </div>
    )
  } /*!!!!!! todo: (oldProps, newProps) => oldProps._reservations.length === newProps._reservations.length  */
)

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

  const response = await axiosInstance.get('reservation/admin', {
    headers: { 'auth-token': session.token as string },
  })
  const apartmentResponse = await axiosInstance.get('apartment/options', {
    headers: { 'auth-token': session.token as string },
  })
  console.log(apartmentResponse.data)

  return {
    props: {
      _reservations: response.data.result,
      apartments: [...apartmentResponse.data.apartments],
    },
  }
}
