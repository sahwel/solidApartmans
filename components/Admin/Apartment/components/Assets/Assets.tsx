import { FunctionComponent, memo } from 'react'
import Asset from './Asset'
import cl from 'classnames'
import {
  AdminFacility,
  Facility,
} from '../../../../../services/apartmentDefinitions'

interface AssetsProps {
  facilities: AdminFacility[]
  handleFacilitiesChange: (_id: string) => void
}

const Assets: FunctionComponent<AssetsProps> = memo(
  function Assets({ facilities, handleFacilitiesChange }) {
    return (
      <div
        className={cl(
          'h-[20rem] w-full auto-rows-min grid-cols-2 items-start gap-5 space-y-2 overflow-y-auto rounded-lg border-2 border-main-blue p-3 xl:grid xl:space-y-0'
        )}
      >
        {facilities.map((e) => (
          <Asset
            key={e._id}
            {...e}
            handleFacilitiesChange={handleFacilitiesChange}
          />
        ))}
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.facilities.length === newProps.facilities.length
      ? oldProps.facilities.every(
          (e, i) =>
            e._id === newProps.facilities[i]._id &&
            e.nameEN === newProps.facilities[i].nameEN &&
            e.nameHU === newProps.facilities[i].nameHU &&
            e.selected === newProps.facilities[i].selected &&
            e.selected === newProps.facilities[i].selected
        )
      : false
)

export default Assets
