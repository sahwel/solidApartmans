import { StarIcon } from '@heroicons/react/solid'
import { FunctionComponent, memo } from 'react'
import { Review } from '../../../services/apartmentDefinitions'

const ApartmentReview: FunctionComponent<Review> = memo(
  function ApartmentReview({ customer, review, stars, timeAgo }) {
    return (
      <div className="w-full rounded border-[1px] border-main-blue p-3">
        <div className="flex justify-between">
          <p className="text-lg font-bold">{customer}</p>
          <p className="text-sm">{timeAgo}</p>
        </div>
        <div className="flex">
          {Array.from(Array(stars).keys()).map((e, i) => (
            <StarIcon className="h-4 w-4" key={i} />
          ))}
        </div>
        <p className="mt-5 text-sm font-light">{review}</p>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.customer === newProps.customer &&
    oldProps.review === newProps.review &&
    oldProps.stars === newProps.stars &&
    oldProps.timeAgo === newProps.timeAgo
)

export default ApartmentReview
