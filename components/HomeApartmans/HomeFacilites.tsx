import Image from 'next/image'
import { FunctionComponent, memo } from 'react'

interface HomeFacilitesProps {
  facilities: string[]
}

const HomeFacilities: FunctionComponent<HomeFacilitesProps> = memo(
  function HomeFacilities({ facilities }) {
    return (
      <div className="col-start-1 col-end-3 flex  w-full justify-evenly lg:w-1/2">
        {facilities.map((e, i) => (
          <Image src={e} width={30} height={30} alt="icon" key={i} />
        ))}
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.facilities.length === newProps.facilities.length
      ? oldProps.facilities.every((e, i) => e === newProps.facilities[i])
      : false
)

export default HomeFacilities
