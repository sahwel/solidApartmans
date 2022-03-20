import Image from 'next/image'
import { FunctionComponent, memo } from 'react'
import { Facility } from '../../services/apartmentDefinitions'
import CustomImage from '../Image/CustomImage'

interface HomeFacilitesProps {
  facilities: Facility[]
}

const HomeFacilities: FunctionComponent<HomeFacilitesProps> = memo(
  function HomeFacilities({ facilities }) {
    return (
      <div className="col-start-1 col-end-3 flex  w-full items-center justify-evenly lg:w-1/2">
        {facilities.slice(0, 5).map((e, i) => (
          <CustomImage url={e.url} alt="icon" key={i} classNames="w-7 h-7" />
        ))}
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

export default HomeFacilities
