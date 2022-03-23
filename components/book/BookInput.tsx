import React, { FunctionComponent, memo } from 'react'
import CustomImage from '../Image/CustomImage'
import cl from 'classnames'
import { FormState, UseFormRegister } from 'react-hook-form'
import { BookFormModel } from './definitions'

export type InputType = 'text' | 'number'

interface BookInputProps {
  isRequired?: boolean
  register: UseFormRegister<BookFormModel>
  property: keyof BookFormModel
  placeholder: string
  url?: string
  type?: InputType
  min?: number
  formState: FormState<BookFormModel>
  classNames?: string
}

const BookInput: FunctionComponent<BookInputProps> = memo(
  function BookInput({
    placeholder,
    url,
    register,
    formState,
    property,
    classNames = '',
    min = 0,
    isRequired = true,
    type = 'text',
  }) {
    const { errors } = formState

    return (
      <div className={cl('w-full', classNames)}>
        <div className="relative w-full  ">
          <input
            type={type}
            {...register(
              property,
              isRequired ? { required: 'This field is required! *' } : undefined
            )}
            min={min}
            className={cl(
              'w-full rounded-sm border-[1px] border-main-blue py-2 px-4',
              url && 'pr-12',
              errors[property] && 'border-red-600'
            )}
            placeholder={placeholder}
          />
          {url && (
            <div className="absolute top-1/2 right-3 -translate-y-1/2 transform">
              <CustomImage url={url} alt="icon" classNames="w-5 h-5" />
            </div>
          )}
        </div>
        {errors[property] && (
          <span className="text-sm text-red-600">
            {errors[property]?.message}
          </span>
        )}
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.placeholder === newProps.placeholder &&
    oldProps.url === newProps.url &&
    oldProps.register === newProps.register &&
    oldProps.property === newProps.property &&
    oldProps.classNames === newProps.classNames &&
    oldProps.min === newProps.min &&
    oldProps.formState === newProps.formState &&
    oldProps.isRequired === newProps.isRequired &&
    oldProps.type === newProps.type
)

export default BookInput
