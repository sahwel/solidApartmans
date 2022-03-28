import React, { FunctionComponent, memo } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { BookFormModel } from './definitions'
import cl from 'classnames'

interface BookCheckboxProps {
  register: UseFormRegister<BookFormModel>
  property: keyof BookFormModel
  id: string
  title: string
  classNames?: string
  onChange?: () => void
}

const BookCheckbox: FunctionComponent<BookCheckboxProps> = memo(
  function BookCheckbox({
    title,
    register,
    property,
    id,
    classNames = '',
    onChange = () => ({}),
  }) {
    return (
      <div
        className={cl(
          'flex w-full items-center justify-start space-x-5',
          classNames
        )}
      >
        <input
          {...register(property, { onChange: onChange })}
          type="checkbox"
          name={id}
          id={id}
          className="h-5 w-5 border-main-blue"
        />
        <label htmlFor={id}>{title}</label>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.id === newProps.id &&
    oldProps.register === newProps.register &&
    oldProps.property === newProps.property &&
    oldProps.classNames === newProps.classNames &&
    oldProps.onChange === newProps.onChange &&
    oldProps.title === newProps.title
)

export default BookCheckbox
