import { StarIcon } from '@heroicons/react/solid'
import { FunctionComponent, memo } from 'react'
import { Address, lookAddress } from '../../../services/apartmentDefinitions'

interface ApartmentDatasProps {
  address: Address
  stars: number
  name: string
  price: number
}

const ApartmentDatas: FunctionComponent<ApartmentDatasProps> = memo(
  function ApartmentDatas({ address, name, price, stars }) {
    return (
      <div className="w-full bg-white p-3 lg:pt-0">
        <div className="flex justify-between">
          <p className="text-lg font-bold">
            {address.zip_code +
              ', ' +
              address.city +
              ' ' +
              address.street +
              ' ' +
              address.house_number}
          </p>
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
  },
  (oldProps, newProps) =>
    lookAddress(oldProps.address, newProps.address) &&
    oldProps.stars === newProps.stars &&
    oldProps.name === newProps.name &&
    oldProps.price === newProps.price
)

export default ApartmentDatas
