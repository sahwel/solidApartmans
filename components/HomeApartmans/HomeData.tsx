import { StarIcon } from '@heroicons/react/solid'
import React, { FunctionComponent } from 'react'

interface HomeDataProps {
  name: string
  stars: number
  address: string
}

const HomeData: FunctionComponent<HomeDataProps> = ({
  name,
  stars,
  address,
}) => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between ">
          <p>{address}</p>
          <p className="flex items-center md:hidden ">
            <span>{stars}</span>
            <StarIcon className="h-5 w-5" />
          </p>
        </div>
        <p className="text-sm">{name}</p>
      </div>
      <p className="hidden text-right font-bold md:block">min. 13000 Ft</p>
    </>
  )
}

export default HomeData
