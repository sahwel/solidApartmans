import Image from 'next/image'
import { FunctionComponent, memo } from 'react'
import { Facility } from '../../services/apartmentDefinitions'

interface HomeFacilitesProps {
  facilities: Facility[]
}

const HomeFacilities: FunctionComponent<HomeFacilitesProps> = memo(
  function HomeFacilities({ facilities }) {
    return (
      <div className="col-start-1 col-end-3 flex  w-full justify-evenly lg:w-1/2">
        {facilities.slice(0, 5).map((e, i) => (
          <Image src={e.url} width={30} height={30} alt="icon" key={i} />
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
