import ReviewsContainer from '../../components/Admin/Reviews/ReviewsContainer'
import ReviewsFilter from '../../components/Admin/Reviews/ReviewsFilter'

const reviews = () => {
  return (
    <div className="flex overflow-hidden p-5">
      <ReviewsFilter />
      <ReviewsContainer />
    </div>
  )
}

export default reviews
