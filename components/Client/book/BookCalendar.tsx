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
import { axiosInstance } from '../../../services/axiosInstance'

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
  setEndLeave?: Dispatch<SetStateAction<Date | null>>
  excludeDates?: Date[]
  clearErrors: UseFormClearErrors<BookFormModel>
  includeDateIntervals?: { start: Date; end: Date }[]
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
    excludeDates = [],
    includeDateIntervals,
    setEndLeave = () => ({}),
  }) {
    const handleChange = useCallback(
      () => async (date: Date) => {
        setter(date)
        if (formValue === 'arrive') {
          const response = await axiosInstance.get(
            `reservation/freeTimeEnd/?start=${date}`
          )
          setEndLeave(response.data.result)
        }
        setValue(formValue, date)
        clearErrors(formValue)
      },
      [clearErrors, formValue, setEndLeave, setValue, setter]
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
                includeDateIntervals={includeDateIntervals}
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
    oldProps.readOnly === newProps.readOnly &&
    oldProps.includeDateIntervals?.length ===
      (newProps.includeDateIntervals?.length &&
        newProps.includeDateIntervals !== undefined &&
        oldProps.includeDateIntervals?.every((e, i) => {
          if (!newProps.includeDateIntervals) return false
          return (
            e.end === newProps.includeDateIntervals[i].end &&
            e.start === newProps.includeDateIntervals[i].start
          )
        }))
)

export default BookCalendar
