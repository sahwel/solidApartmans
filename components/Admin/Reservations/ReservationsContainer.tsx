import React, { memo } from 'react'
import Reservation from './Reservation'

const ReservationsContainer = memo(function ReservationsContainer() {
  return (
    <div className="max-h-[83vh] w-2/3 space-y-5 overflow-auto">
      <Reservation />
      <Reservation />
      <Reservation />
      <Reservation />
      <Reservation />
      <Reservation />
      <Reservation />
      <Reservation />
      <Reservation />
      <Reservation />
      <Reservation />
      <Reservation />
    </div>
  )
})

export default ReservationsContainer
