import React, { FunctionComponent, memo, useCallback } from 'react'
import { Button } from '../Button'
import ImageHome from './ImageHome'
import HomeData from './HomeData'
import HomeFacilites from './HomeFacilites'
import { useRouter } from 'next/router'
import { ApartmentDefinitions } from '../../services/apartmentDefinitions'
import HomeCapacity from './HomeCapacity'

export const ApartmanContainer: FunctionComponent<ApartmentDefinitions> = memo(
  function ApartmanContainer({
    id,
    name,
    stars,
    address,
    facilities,
    capacity,
    image,
    price,
  }) {
    const router = useRouter()

    const open = useCallback(() => {
      router.push(`apartment/${id}`)
    }, [id, router])

    return (
      <div className=" h-[23rem] w-full rounded-2xl bg-white text-main-text drop-shadow-md sm:m-auto sm:w-[80%] md:flex md:h-[20rem] md:w-full">
        <ImageHome stars={stars} image={image} />
        <div className="flex h-[40%] flex-col justify-between p-5 font-medium md:h-full md:w-[60%]">
          <div className="flex justify-between">
            <HomeData
              name={name}
              stars={stars}
              address={address}
              price={price}
            />
          </div>
          <div className=" hidden w-full justify-between md:grid md:grid-cols-3 lg:flex">
            <HomeFacilites facilities={facilities} />

            <HomeCapacity {...capacity} />
          </div>
          <div className=" mx-auto flex w-4/5 justify-between space-x-9">
            <Button title="Book" classNames="w-1/2 p-2 px-5" />
            <button className="w-1/2  p-2 px-5 underline" onClick={open}>
              More
            </button>
          </div>
        </div>
      </div>
    )
  },
  (oldProps: ApartmentDefinitions, newProps: ApartmentDefinitions) =>
    oldProps.id === newProps.id &&
    oldProps.address === newProps.address &&
    oldProps.name === newProps.name &&
    oldProps.stars === newProps.stars &&
    oldProps.capacity.capacity === newProps.capacity.capacity &&
    oldProps.capacity.bedrooms === newProps.capacity.bedrooms &&
    oldProps.image === newProps.image &&
    oldProps.price === newProps.price &&
    (oldProps.facilities.length === newProps.facilities.length
      ? oldProps.facilities.every((e, i) => e === newProps.facilities[i])
      : false)
)
