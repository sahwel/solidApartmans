import React, { FunctionComponent, memo } from 'react'
import { AdmiReservationModel } from '../../../services/reservationsDefinitions'
import Reservation from './Reservation'
import { lookReservation } from './services/definitions'

interface ReservationsContainerProps {
  reservations: AdmiReservationModel[]
}

const ReservationsContainer: FunctionComponent<ReservationsContainerProps> =
  memo(
    function ReservationsContainer({ reservations }) {
      return (
        <div className="max-h-[83vh] w-2/3 space-y-5 overflow-auto">
          {reservations.map((e) => (
            <Reservation key={e._id} reservation={e} />
          ))}
        </div>
      )
    },
    (oldProps, newProps) => oldProps.reservations.length === newProps.reservations.length && oldProps.reservations.every((e, i) => lookReservation(e, newProps.reservations[i]))
  )

export default ReservationsContainer
