import React, { FunctionComponent, memo, useCallback } from 'react'
import {
  AdminFacility,
  Facility,
} from '../../../../../services/apartmentDefinitions'
import CustomImage from '../../../../Image/CustomImage'

interface AssetProps extends AdminFacility {
  handleFacilitiesChange: (_id: string) => void
}

const Asset: FunctionComponent<AssetProps> = memo(
  function Asset({ nameHU, url, _id, handleFacilitiesChange, selected }) {
    const handleChange = useCallback(() => {
      console.log(_id)

      handleFacilitiesChange(_id)
    }, [_id, handleFacilitiesChange])

    return (
      <div className="flex items-center justify-between space-x-2">
        <div className="flex space-x-2">
          <CustomImage
            url={url}
            alt="icon"
            className="h-5 w-5"
            isFromApi={true}
          />
          <label
            htmlFor={`admin-apartment-icon-${_id}`}
            className="cursor-pointer overflow-y-hidden text-ellipsis whitespace-nowrap font-medium"
          >
            {nameHU}
          </label>
        </div>
        <input
          type="checkbox"
          id={`admin-apartment-icon-${_id}`}
          className="!m-0 !h-4 !w-4 !p-0"
          checked={selected}
          onChange={handleChange}
        />
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps._id === newProps._id &&
    oldProps.nameHU === newProps.nameHU &&
    oldProps.selected === newProps.selected &&
    oldProps.url === newProps.url
)

export default Asset
