import { StarIcon } from '@heroicons/react/solid'
import { FunctionComponent } from 'react'

interface ApartmentDatasProps {
  address: string
  stars: number
  name: string
  price: number
}

const ApartmentDatas: FunctionComponent<ApartmentDatasProps> = ({
  address,
  name,
  price,
  stars,
}) => {
  return (
    <div className="w-full bg-white p-3 lg:pt-0">
      <div className="flex justify-between">
        <p className="text-lg font-bold">{address}</p>
        <p className="flex items-center md:hidden ">
          <span>{stars}</span>
          <StarIcon className="h-5 w-5" />
        </p>
      </div>
      <div className="lg:text-md mt-3 flex justify-between text-sm lg:mt-1 lg:block">
        <p className="">{name}</p>
        <p>min. {price} Ft</p>
      </div>
    </div>
  )
}

export default ApartmentDatas
