import Image from 'next/image'
import { FunctionComponent, memo } from 'react'
import { Facility } from '../../services/apartmentDefinitions'

interface ApartmentFacilitiesProps {
  facilities: Facility[]
}

const ApartmentFacilities: FunctionComponent<ApartmentFacilitiesProps> = memo(
  function ApartmentFacilities({ facilities }) {
    return (
      <div className="bg-white p-3  lg:w-1/2">
        <h1 className="text-lg font-bold lg:hidden">Facilities</h1>
        <div className="m-auto mt-4 flex max-w-[90vw] space-x-5 overflow-x-auto lg:grid lg:max-h-full lg:justify-start lg:space-x-0 lg:space-y-4 lg:overflow-y-auto lg:overflow-x-hidden">
          {facilities.map((e, i) => (
            <div
              className="grid w-[7rem] justify-start lg:flex lg:w-full lg:items-center lg:space-x-3"
              key={i}
            >
              <div className="relative h-7 w-8">
                <Image src={e.url} alt="icon" layout="fill" />
              </div>
              <p className="mt-2  text-left lg:m-0">{e.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.facilities.length === newProps.facilities.length
      ? oldProps.facilities.every(
          (e, i) =>
            e.name === newProps.facilities[i].name &&
            e.url === newProps.facilities[i].url
        )
      : false
)

export default ApartmentFacilities
