import React, { FunctionComponent, memo } from 'react'
import { Facility } from '../../../../../services/apartmentDefinitions'
import CustomImage from '../../../../Image/CustomImage'

interface AssetProps extends Facility {
  isFromApi?: boolean
}

const Asset: FunctionComponent<AssetProps> = memo(function Asset({
  nameEN,
  nameHU,
  url,
}) {
  console.log(nameEN)

  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="flex space-x-2">
        <CustomImage
          url={url}
          alt="icon"
          classNames="w-5 h-5"
          isFromApi={true}
        />
        <label
          htmlFor="admin-apartment-icon"
          className="cursor-pointer font-medium"
        >
          {nameHU}
        </label>
      </div>
      <input type="checkbox" id="admin-apartment-icon" className="h-4 w-4" />
    </div>
  )
})

export default Asset
