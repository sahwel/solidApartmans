import React, { memo } from 'react'
import Asset from './Asset'

const Assets = memo(function Assets() {
  return (
    <div className="h-[20rem] w-1/2 space-y-3 overflow-y-auto rounded-lg border-2 border-main-blue p-3">
      <Asset />
      <Asset />
      <Asset />
      <Asset />
      <Asset />
      <Asset />
      <Asset />
      <Asset />
      <Asset />
      <Asset />
      <Asset />
      <Asset />
      <Asset />
    </div>
  )
})

export default Assets
