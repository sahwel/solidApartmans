import {
  Dispatch,
  FunctionComponent,
  memo,
  SetStateAction,
  useCallback,
} from 'react'
import DatePicker from 'react-datepicker'
import AdminFilterInput from '../../Common/AdminInput'
import { UseFormSetValue } from 'react-hook-form'
import { ReservationFilterDto } from './services/definitions'

interface ReservationFilterCalendarProps {
  getter: Date | null
  setter: Dispatch<SetStateAction<Date | null>>
  setValue: UseFormSetValue<ReservationFilterDto>
  formValue: keyof ReservationFilterDto
  id: string
  placeholderText: string
  label: string
}

const ReservationFilterCalendar: FunctionComponent<ReservationFilterCalendarProps> =
  memo(
    function ReservationFilterCalendar({
      getter,
      setter,
      formValue,
      setValue,
      id,
      label,
      placeholderText,
    }) {
      const handleChange = useCallback(
        () => (date: Date) => {
          setter(date)
          setValue(formValue, date)
        },
        [formValue, setValue, setter]
      )
      return (
        <AdminFilterInput labeFor={id} label={label}>
          <DatePicker
            autoComplete="off"
            placeholderText={placeholderText}
            className="w-full rounded-lg border-2 border-main-blue py-1 px-3"
            selected={getter}
            id={id}
            onChange={handleChange()}
          />
        </AdminFilterInput>
      )
    },
    (oldProps, newProps) =>
      oldProps.getter === newProps.getter &&
      oldProps.formValue === newProps.formValue &&
      oldProps.setter === newProps.setter &&
      oldProps.setValue === newProps.setValue
  )

export default ReservationFilterCalendar
