import { FunctionComponent, memo } from 'react'
import { Review } from '../../../services/apartmentDefinitions'
import ApartmentReview from './ApartmentReview'

interface ApartmentReviewsProps {
  reviews: Review[]
}

const ApartmentReviews: FunctionComponent<ApartmentReviewsProps> = memo(
  function ApartmentReviews({ reviews }) {
    return (
      <div className="bg-white p-3 md:rounded-bl-2xl md:rounded-br-2xl lg:col-start-3 lg:max-h-full lg:w-1/3 lg:rounded-none lg:pb-0">
        <h1 className="text-lg font-bold lg:hidden">Reviews</h1>
        <div className="mt-5 space-y-5 lg:mt-0 lg:h-full  lg:overflow-y-auto lg:pr-2">
          {reviews.map((e, i) => (
            <ApartmentReview {...e} key={i} />
          ))}
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.reviews.length === newProps.reviews.length
      ? oldProps.reviews.every(
          (e, i) =>
            e.customer === newProps.reviews[i].customer &&
            e.review === newProps.reviews[i].review &&
            e.stars === newProps.reviews[i].stars &&
            e.timeAgo === newProps.reviews[i].timeAgo
        )
      : false
)

export default ApartmentReviews