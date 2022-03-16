import { UserIcon } from '@heroicons/react/outline'

const ApartmentCapacity = () => {
  return (
    <div className="flex justify-evenly bg-white p-3  lg:h-[5rem] lg:w-full">
      <div className="grid">
        <p className="text-lg">Capacity</p>
        <p className="m-auto mt-4 flex">
          <span>4</span>
          <UserIcon className="h-6 w-6" />
        </p>
      </div>
      <div className="grid">
        <p className="text-lg">Bedrooms</p>
        <p className="m-auto mt-4 flex">
          <span>4</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={'/bed.svg'} className="h-6 w-6" alt="icon of a bed" />
        </p>
      </div>
    </div>
  )
}

export default ApartmentCapacity
