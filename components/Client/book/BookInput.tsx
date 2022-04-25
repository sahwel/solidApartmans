import React, { FunctionComponent, memo } from 'react'
import cl from 'classnames'
import { FormState, UseFormRegister } from 'react-hook-form'
import { BookFormModel } from './definitions'
import CustomImage from '../../Image/CustomImage'
import ErrorMsg from '../../Common/ErrorMsg'
import { useTranslation } from 'react-i18next'

export type InputType = 'text' | 'number'

interface BookInputProps {
  isRequired?: boolean
  register: UseFormRegister<BookFormModel>
  property: keyof BookFormModel
  placeholder: string
  url?: string
  type?: InputType
  min?: number
  max?: number
  formState: FormState<BookFormModel>
  className?: string
  onChange?: (e: any) => void
}

const BookInput: FunctionComponent<BookInputProps> = memo(
  function BookInput({
    placeholder,
    url,
    register,
    formState,
    property,
    className = '',
    min = 0,
    onChange = () => ({}),
    max = undefined,
    isRequired = true,
    type = 'text',
  }) {
    const { errors } = formState
    const { t } = useTranslation('Book')
    return (
      <div className={cl('w-full', className)}>
        <div className="relative w-full  ">
          <input
            type={type}
            {...register(
              property,
              isRequired ? { required: t('form.required') + '' } : undefined
            )}
            min={min}
            onChange={onChange}
            max={max}
            className={cl(
              'w-full rounded-sm border-[1px] border-main-blue py-2 px-4',
              url && 'pr-12',
              errors[property] && 'border-red-600'
            )}
            placeholder={placeholder}
          />
          {url && (
            <div className="absolute top-1/2 right-3 -translate-y-1/2 transform">
              <CustomImage url={url} alt="icon" className="h-5 w-5" />
            </div>
          )}
        </div>
        <ErrorMsg message={errors[property]?.message} />
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.placeholder === newProps.placeholder &&
    oldProps.url === newProps.url &&
    oldProps.register === newProps.register &&
    oldProps.onChange === newProps.onChange &&
    oldProps.property === newProps.property &&
    oldProps.className === newProps.className &&
    oldProps.min === newProps.min &&
    oldProps.max === newProps.max &&
    oldProps.formState === newProps.formState &&
    oldProps.isRequired === newProps.isRequired &&
    oldProps.type === newProps.type
)

export default BookInput
