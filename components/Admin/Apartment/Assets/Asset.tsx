import React from 'react'
import CustomImage from '../../../Image/CustomImage'

const Asset = () => {
  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="flex space-x-2">
        <CustomImage url="/wifi.svg" alt="icon" classNames="w-5 h-5" />
        <label
          htmlFor="admin-apartment-icon"
          className="cursor-pointer font-medium"
        >
          Wifi
        </label>
      </div>
      <input type="checkbox" id="admin-apartment-icon" className="h-4 w-4" />
    </div>
  )
}

export default Asset
