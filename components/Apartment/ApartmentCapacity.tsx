import { UserIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { FunctionComponent, memo } from 'react'

interface ApartmentCapacityProps {
  capacity: number
  bedrooms: number
}

const ApartmentCapacity: FunctionComponent<ApartmentCapacityProps> = memo(
  function ApartmentCapacity({ capacity, bedrooms }) {
    return (
      <div className="flex justify-evenly bg-white p-3  lg:h-[5rem] lg:w-full">
        <div className="grid">
          <p className="text-lg">Capacity</p>
          <div className="m-auto mt-4 flex">
            <span>{capacity}</span>
            <UserIcon className="h-6 w-6" />
          </div>
        </div>
        <div className="grid">
          <p className="text-lg">Bedrooms</p>
          <div className="m-auto mt-4 flex">
            <span>{bedrooms}</span>
            <div className="relative h-6 w-6">
              <Image src={'/bed.svg'} layout="fill" alt="icon of a bed" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.bedrooms === newProps.bedrooms &&
    oldProps.capacity === newProps.capacity
)

export default ApartmentCapacity
