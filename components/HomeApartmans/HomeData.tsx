import { StarIcon } from '@heroicons/react/solid'
import React, { FunctionComponent, memo } from 'react'

interface HomeDataProps {
  name: string
  stars: number
  address: string
  price: number
}

const HomeData: FunctionComponent<HomeDataProps> = memo(
  function HomeData({ name, stars, price, address }) {
    return (
      <>
        <div className="w-full lg:w-auto">
          <div className="flex justify-between ">
            <p>{address}</p>
            <p className="flex items-center md:hidden ">
              <span>{stars}</span>
              <StarIcon className="h-5 w-5" />
            </p>
          </div>
          <p className="text-sm">{name}</p>
        </div>
        <p className="hidden w-fit text-right font-bold md:block">
          min. {price} Ft
        </p>
      </>
    )
  },
  (oldProps, newProps) =>
    oldProps.name === newProps.name &&
    oldProps.stars === newProps.stars &&
    oldProps.address === newProps.address &&
    oldProps.price === newProps.price
)

export default HomeData
