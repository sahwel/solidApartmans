import React, { FunctionComponent, memo } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import cl from 'classnames'
import { InputTypes } from '../../../../services/commonDefinitions'

interface ApartmentInputProps {
  register: UseFormRegisterReturn
  id: string
  placeholder: string
  error?: string
  type?: InputTypes
}

const ApartmentInput: FunctionComponent<ApartmentInputProps> = memo(
  function ApartmentInput({ register, id, placeholder, error, type = 'text' }) {
    return (
      <input
        {...register}
        id={id}
        type={type}
        placeholder={placeholder}
        className={cl(
          'rounded-lg border-2 border-main-blue py-1 px-3',
          error && '!border-red-600 !text-red-600'
        )}
      />
    )
  },
  (oldProps, newProps) =>
    oldProps.type === newProps.type &&
    oldProps.id === newProps.id &&
    oldProps.placeholder === newProps.placeholder &&
    oldProps.error === newProps.error &&
    oldProps.register === newProps.register
)

export default ApartmentInput
