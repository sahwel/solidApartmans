import { UserIcon } from '@heroicons/react/outline'
import { FunctionComponent } from 'react'

interface ApartmentCapacityProps {
  capacity: number
  bedrooms: number
}

const ApartmentCapacity: FunctionComponent<ApartmentCapacityProps> = ({
  capacity,
  bedrooms,
}) => {
  return (
    <div className="flex justify-evenly bg-white p-3  lg:h-[5rem] lg:w-full">
      <div className="grid">
        <p className="text-lg">Capacity</p>
        <p className="m-auto mt-4 flex">
          <span>{capacity}</span>
          <UserIcon className="h-6 w-6" />
        </p>
      </div>
      <div className="grid">
        <p className="text-lg">Bedrooms</p>
        <p className="m-auto mt-4 flex">
          <span>{bedrooms}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={'/bed.svg'} className="h-6 w-6" alt="icon of a bed" />
        </p>
      </div>
    </div>
  )
}

export default ApartmentCapacity
