import { StarIcon } from '@heroicons/react/solid'

const ApartmentReview = () => {
  return (
    <div className="w-full rounded border-[1px] border-main-blue p-3">
      <div className="flex justify-between">
        <p className="text-lg font-bold">John Doe</p>
        <p className="text-sm">2 days ago</p>
      </div>
      <div className="flex">
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
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
