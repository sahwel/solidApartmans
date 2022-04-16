import {
  Dispatch,
  FunctionComponent,
  memo,
  SetStateAction,
  useCallback,
  useState,
} from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../Button'
import AdminFilterInput from '../../Common/AdminInput'
import { ReservationFilterDto } from './services/definitions'
import ReservationFilterCalendar from './ReservationFilterCalendar'
import { getSession } from 'next-auth/react'
import { useToast } from '../../Common/Toast/Toast'
import { axiosInstance } from '../../../services/axiosInstance'
import { AdmiReservationModel } from '../../../services/reservationsDefinitions'
import { ApartmentsNames } from '../../../services/apartmentDefinitions'

interface ReservationFilterProps {
  setReservations: Dispatch<SetStateAction<AdmiReservationModel[]>>
  apartments: ApartmentsNames[]
}

const ReservationsFilter: FunctionComponent<ReservationFilterProps> = memo(
  function ReservationsFilter({ setReservations, apartments }) {
    const { register, handleSubmit, setValue } = useForm<ReservationFilterDto>({
      defaultValues: { start: new Date(), end: null, freeTextSearch: null },
    })

    const toast = useToast()
    const onSubmit = useCallback(
      async (data: ReservationFilterDto) => {
        try {
          if (data.apartment === 'null')
            data.apartment = JSON.parse(data.apartment)
          console.log(data)

          const session = await getSession()
          let query: string = '?'
          if (data.freeTextSearch)
            query = query + `freeText=${data.freeTextSearch}`
          if (data.start)
            query = query + `${query.length > 1 ? '&' : ''}start=${data.start}`
          if (data.end)
            query =
              query + `${query.length > 1 ? '&' : ''}}&freeText=${data.end}`
          if (data.apartment)
            query =
              query +
              `${query.length > 1 ? '&' : ''}apartment=${data.apartment}`

          const response = await axiosInstance.get(
            `reservation/admin${query}`,
            {
              headers: { 'auth-token': session?.token as string },
            }
          )

          setReservations(response.data.result)
        } catch (error: any) {
          toast.error(
            error.response
              ? error.response.data
                ? error.response.data.msg
                : 'Egy hiba lépett fel a kérés közben!'
              : error
          )
        }
      },
      [setReservations, toast]
    )

    const [start, setStart] = useState<Date | null>(new Date())
    const [end, setEnd] = useState<Date | null>(null)

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
  }
)

export default ReservationsFilter
