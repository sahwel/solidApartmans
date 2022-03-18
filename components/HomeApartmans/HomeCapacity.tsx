import { UserIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { FunctionComponent, memo } from 'react'

interface HomeCapacityProps {
  bedrooms: number
  capacity: number
}

const HomeCapacity: FunctionComponent<HomeCapacityProps> = memo(
  function HomeCapacity({ bedrooms, capacity }) {
    return (
      <div className="flex  justify-evenly border-l-[1px] border-main-blue lg:w-1/2">
        <div className="grid">
          <div className="text-lg">Capacity</div>
          <p className="m-auto mt-4 flex">
            <span>{capacity}</span>
            <UserIcon className="h-6 w-6" />
          </p>
        </div>
        <div className="hidden lg:grid">
          <p className="text-lg">Bedrooms</p>
          <div className="m-auto mt-4 flex">
            <span>{bedrooms}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="relative h-6 w-6">
              <Image src={'/bed.svg'} alt="icon of a bed" layout="fill" />
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

export default HomeCapacity
