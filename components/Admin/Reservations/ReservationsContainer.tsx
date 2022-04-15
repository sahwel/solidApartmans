import React, { FunctionComponent, memo } from 'react'
import { AdmiReservationModel } from '../../../services/reservationsDefinitions'
import Reservation from './Reservation'

interface ReservationsContainerProps {
  reservations: AdmiReservationModel[]
}

const ReservationsContainer: FunctionComponent<ReservationsContainerProps> =
  memo(function ReservationsContainer({ reservations }) {
    return (
      <div className="max-h-[83vh] w-2/3 space-y-5 overflow-auto">
        {reservations.map((e) => (
          <Reservation key={e._id} />
        ))}
      </div>
    )
  })

export default ReservationsContainer
