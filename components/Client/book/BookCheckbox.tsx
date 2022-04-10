import React, { FunctionComponent, memo } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { BookFormModel } from './definitions'
import cl from 'classnames'

interface BookCheckboxProps {
  register: UseFormRegister<BookFormModel>
  property: keyof BookFormModel
  id: string
  title: string
  className?: string
  disabled?: boolean
  onChange?: () => void
}

const BookCheckbox: FunctionComponent<BookCheckboxProps> = memo(
  function BookCheckbox({
    title,
    register,
    property,
    disabled = false,
    id,
    className = '',
    onChange = () => ({}),
  }) {
    return (
      <div
        className={cl(
          'flex w-full items-center justify-start space-x-5',
          className
        )}
      >
        <input
          {...register(property, { onChange: onChange })}
          type="checkbox"
          disabled={disabled}
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
    oldProps.className === newProps.className &&
    oldProps.disabled === newProps.disabled &&
    oldProps.onChange === newProps.onChange &&
    oldProps.title === newProps.title
)

export default BookCheckbox
