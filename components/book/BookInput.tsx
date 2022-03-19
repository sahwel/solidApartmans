import React, { FunctionComponent, memo } from 'react'
import CustomImage from '../Image/CustomImage'
import cl from 'classnames'

export type InputType = 'text' | 'number'

interface BookInputProps {
  placeholder: string
  url?: string
  type?: InputType
  min?: number
}

const BookInput: FunctionComponent<BookInputProps> = memo(function BookInput({
  placeholder,
  url,
  min = 0,
  type = 'text',
}) {
  return (
    <div className="relative w-full  ">
      <input
        type={type}
        min={min}
        className={cl(
          'w-full rounded-sm border-[1px] border-main-blue py-2 px-4',
          url && 'pr-12'
        )}
        placeholder={placeholder}
      />
      {url && (
        <div className="absolute top-1/2 right-3 -translate-y-1/2 transform">
          <CustomImage url={url} alt="icon" classNames="w-5 h-5" />
        </div>
      )}
    </div>
  )
})

export default BookInput
