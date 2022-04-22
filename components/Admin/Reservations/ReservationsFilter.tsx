import { Dispatch, FunctionComponent, memo, SetStateAction } from 'react'
import { Button } from '../../Button'
import AdminFilterInput from '../../Common/AdminInput'
import ReservationFilterCalendar from './ReservationFilterCalendar'
import { AdmiReservationModel } from '../../../services/reservationsDefinitions'
import { ApartmentsNames } from '../../../services/apartmentDefinitions'
import { useReservationFilter } from './services/useReservationFilter'

interface ReservationFilterProps {
  setReservations: Dispatch<SetStateAction<AdmiReservationModel[]>>
  apartments: ApartmentsNames[]
}

const ReservationsFilter: FunctionComponent<ReservationFilterProps> = memo(
  function ReservationsFilter({ setReservations, apartments }) {
    const {
      handleSubmit,
      onSubmit,
      register,
      start,
      setValue,
      setStart,
      end,
      setEnd,
    } = useReservationFilter(setReservations, apartments)
    return (
      <div className="w-1/3">
        <h1 className="text-2xl font-bold">Foglalások</h1>

        <form
          className="mt-5 grid w-[80%] gap-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <AdminFilterInput
            labeFor="reservation-filter-apartment-search"
            label="Apartman"
          >
            <select
              {...register('apartment')}
              id="reservation-filter-apartment-search"
              placeholder="B apartman"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            >
              <option value="null">Mind</option>
              {apartments.map((e) => (
                <option value={e._id} key={e._id}>
                  {e.name}
                </option>
              ))}
            </select>
          </AdminFilterInput>
          <AdminFilterInput
            labeFor="reservation-filter-free-text-search"
            label="Szabad szöveges kereső"
          >
            <input
              {...register('freeTextSearch')}
              id="reservation-filter-free-text-search"
              type="text"
              placeholder="Kis István"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminFilterInput>
          <ReservationFilterCalendar
            formValue="start"
            getter={start}
            setValue={setValue}
            id="reservation-filter-start-search"
            label="Foglalás kezdete"
            setter={setStart}
            placeholderText="2022-11-02"
          />
          <ReservationFilterCalendar
            formValue="end"
            getter={end}
            setValue={setValue}
            id="reservation-filter-end-search"
            label="reservation-filter-end-search"
            setter={setEnd}
            placeholderText="2022-11-12"
          />
          <Button title="Keres" type="submit" className="w-1/3 py-1" />
        </form>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.setReservations === newProps.setReservations &&
    oldProps.apartments.length === newProps.apartments.length &&
    oldProps.apartments.every(
      (e, i) =>
        e._id === newProps.apartments[i]._id &&
        e.name === newProps.apartments[i].name
    )
)

export default ReservationsFilter
