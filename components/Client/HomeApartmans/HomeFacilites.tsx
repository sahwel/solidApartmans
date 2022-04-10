import { FunctionComponent, memo } from 'react'
import { Facility } from '../../../services/apartmentDefinitions'
import CustomImage from '../../Image/CustomImage'

interface HomeFacilitesProps {
  facilities: Facility[]
}

const HomeFacilities: FunctionComponent<HomeFacilitesProps> = memo(
  function HomeFacilities({ facilities }) {
    return (
      <div className="col-start-1 col-end-3 flex  w-full items-center justify-evenly lg:w-1/2">
        {facilities.slice(0, 5).map((e) => (
          <CustomImage
            url={e.url}
            alt="icon"
            key={e.url}
            className="w-7 h-7"
            isFromApi={true}
          />
        ))}
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.facilities.length === newProps.facilities.length
      ? oldProps.facilities.every(
          (e, i) =>
            e.nameHU === newProps.facilities[i].nameHU &&
            e.nameEN === newProps.facilities[i].nameEN &&
            e.url === newProps.facilities[i].url
        )
      : false
)

export default HomeFacilities
