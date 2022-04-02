import React, { FunctionComponent, memo } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import cl from 'classnames'

interface FaqInputProps {
  register: UseFormRegisterReturn
  id: string
  placeholder: string
  error?: string
}

const FaqInput: FunctionComponent<FaqInputProps> = memo(
  function FaqInput({ register, id, placeholder, error }) {
    return (
      <input
        {...register}
        id={id}
        type="text"
        placeholder={placeholder}
        className={cl(
          'rounded-lg border-2 border-main-blue py-1 px-3',
          error && '!border-red-600 !text-red-600'
        )}
      />
    )
  },
  (oldProps, newProps) =>
    oldProps.id === newProps.id &&
    oldProps.placeholder === newProps.placeholder &&
    oldProps.error === newProps.error &&
    oldProps.register === newProps.register
)

export default FaqInput
