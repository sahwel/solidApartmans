import React from 'react'
import CustomImage from '../../../Image/CustomImage'

const ImageHedaer = () => {
  return (
    <div className="flex items-center justify-between border-b-2 border-main-blue pb-2">
      <h1 className="text-xl font-bold">Képek</h1>
      <div className="flex cursor-pointer items-center">
        <CustomImage
          alt="add image icon"
          url="/add-img.svg"
          classNames="w-10 h-10"
        />
        <label htmlFor="" className="cursor-pointer font-bold">
          Kép hozzáadása
        </label>
      </div>
    </div>
  )
}

export default ImageHedaer
