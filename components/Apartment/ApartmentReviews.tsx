import ApartmentReview from './ApartmentReview'

const ApartmentReviews = () => {
  return (
    <div className="bg-white p-3 lg:col-start-3 lg:max-h-full lg:w-1/3 lg:pb-0">
      <h1 className="text-lg font-bold lg:hidden">Reviews</h1>
      <div className="mt-5 space-y-5 lg:mt-0 lg:h-full  lg:overflow-y-auto lg:pr-2">
        <ApartmentReview />
        <ApartmentReview />
      </div>
    </div>
  )
}

export default ApartmentReviews
