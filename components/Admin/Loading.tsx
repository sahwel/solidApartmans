import React, { memo } from 'react'

const Loading = memo(function Loading() {
  return (
    <div className="text-2l flex h-full w-screen items-center justify-center">
      Töltés...
    </div>
  )
})

export default Loading
