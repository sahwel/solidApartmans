import React, { memo } from 'react'
import ImageHedaer from './ImageHedaer'
import ImagesBody from './ImagesBody'

const Images = memo(function Images() {
  return (
    <div className="h-[30rem] rounded-2xl border-2 border-main-blue p-3 ">
      <ImageHedaer />
      <ImagesBody images={[]} />
    </div>
  )
})

export default Images
