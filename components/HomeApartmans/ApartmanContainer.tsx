import React, { FunctionComponent, useCallback } from 'react'
import { Button } from '../Button'
import ImageHome from './ImageHome'
import HomeData from './HomeData'
import HomeFacilites from './HomeFacilites'
import { useRouter } from 'next/router'

interface ApartmanContainerProps {
  id: string
  name: string
  stars: number
  address: string
}

export const ApartmanContainer: FunctionComponent<ApartmanContainerProps> = ({
  id,
  name,
  stars,
  address,
}) => {
  const router = useRouter()

  const open = useCallback(() => {
    router.push(`apartment/${id}`)
  }, [id, router])

  return (
    <div className=" h-[23rem] w-full rounded-2xl bg-white text-main-text drop-shadow-md sm:m-auto sm:w-[80%] md:flex md:h-[20rem] md:w-full">
      <ImageHome stars={stars} />
      <div className="flex h-[40%] flex-col justify-between p-5 font-medium md:h-full md:w-[60%]">
        <div className="flex justify-between">
          <HomeData name={name} stars={stars} address={address} />
        </div>
        <HomeFacilites />
        <div className=" mx-auto flex w-4/5 justify-between space-x-9">
          <Button title="Book" classNames="w-1/2 p-2 px-5" />
          <button className="w-1/2  p-2 px-5 underline" onClick={open}>
            More
          </button>
        </div>
      </div>
    </div>
  )
}
