import ReservationsContainer from '../../components/Admin/Reservations/ReservationsContainer'
import ReservationsFilter from '../../components/Admin/Reservations/ReservationsFilter'

const reservations = () => {
  return (
    <div className="flex overflow-hidden p-5">
      <ReservationsFilter />
      <ReservationsContainer />
    </div>
  )
}

export default reservations
