import {
  Dispatch,
  FunctionComponent,
  memo,
  SetStateAction,
  useCallback,
} from 'react'
import cl from 'classnames'
import DatePicker from 'react-datepicker'
import CustomImage from '../../Image/CustomImage'
import { BookFormModel } from './definitions'
import {
  Control,
  Controller,
  UseFormClearErrors,
  UseFormSetValue,
} from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import ErrorMsg from '../../Common/ErrorMsg'

interface BookCalendarProps {
  isCompany: boolean
  getter: Date | null
  readOnly?: boolean
  className: string
  control: Control<BookFormModel, any>
  setter: Dispatch<SetStateAction<Date | null>>
  setValue: UseFormSetValue<BookFormModel>
  formValue: keyof BookFormModel
  error?: string
  excludeDates: Date[]
  clearErrors: UseFormClearErrors<BookFormModel>
}

const BookCalendar: FunctionComponent<BookCalendarProps> = memo(
  function BookCalendar({
    isCompany,
    getter,
    readOnly = false,
    setter,
    className,
    formValue,
    setValue,
    error,
    clearErrors,
    control,
    excludeDates,
  }) {
    const handleChange = useCallback(
      () => (date: Date) => {
        setter(date)
        setValue(formValue, date)
        clearErrors(formValue)
      },
      [clearErrors, formValue, setValue, setter]
    )

    const { t } = useTranslation('Book')
    return (
      <div className={cl(className, !isCompany && 'lg:!row-start-4')}>
        <div className="relative">
          <Controller
            control={control}
            name={formValue}
            rules={{ required: t('form.required') + '' }}
            render={() => (
              <DatePicker
                excludeDates={excludeDates}
                autoComplete="off"
                placeholderText="2022-11-12"
                readOnly={readOnly}
                className={cl(
                  'w-full rounded-sm border-[1px] border-main-blue py-2 px-4',
                  error && 'border-red-600'
                )}
                selected={getter}
                id="leave-date"
                onChange={handleChange()}
              />
            )}
          />
          <div className="absolute top-1/2 right-3 -translate-y-1/2 transform">
            <CustomImage
              url="calendar.svg"
              alt="icon"
              className="h-5 w-5"
              onClick={() => document.getElementById('leave-date')?.click()}
            />
          </div>
        </div>
        <ErrorMsg message={error} />
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.getter === newProps.getter &&
    oldProps.className === newProps.className &&
    oldProps.isCompany === newProps.isCompany &&
    oldProps.formValue === newProps.formValue &&
    oldProps.setter === newProps.setter &&
    oldProps.error === newProps.error &&
    oldProps.setValue === newProps.setValue &&
    oldProps.control === newProps.control &&
    oldProps.clearErrors === newProps.clearErrors &&
    oldProps.readOnly === newProps.readOnly
)

export default BookCalendar
