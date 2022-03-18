import { StarIcon } from '@heroicons/react/solid'
import { FunctionComponent } from 'react'
import { Review } from '../../services/apartmentDefinitions'

const ApartmentReview: FunctionComponent<Review> = ({
  customer,
  review,
  stars,
  timeAgo,
}) => {
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
      <p className="mt-5 text-sm font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        efficitur leo tortor, ac sollicitudin arcu vestibulum et. Ut faucibus,
        tellus non ultrices rhoncus, dolor sit amet, consectetur adipiscing
        elit. nteger efficitur leo tortor, ac sollicitudin arcu vestibulum et.
        Ut faucibus, tellus non ultrices rhoncus, dolor sit amet, consectetur
        adipiscing elit.
      </p>
    </div>
  )
}

export default ApartmentReview
