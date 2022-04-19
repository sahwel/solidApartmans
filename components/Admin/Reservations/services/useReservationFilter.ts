import { getSession } from 'next-auth/react'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ApartmentsNames } from '../../../../services/apartmentDefinitions'
import { axiosInstance } from '../../../../services/axiosInstance'
import { AdmiReservationModel } from '../../../../services/reservationsDefinitions'
import { useToast } from '../../../Common/Toast/Toast'
import { ReservationFilterDto } from './definitions'

export const useReservationFilter = (
  setReservations: Dispatch<SetStateAction<AdmiReservationModel[]>>,
  apartments: ApartmentsNames[]
) => {
  const { register, handleSubmit, setValue } = useForm<ReservationFilterDto>({
    defaultValues: { start: new Date(), end: null, freeTextSearch: null },
  })

  const toast = useToast()
  const onSubmit = useCallback(
    async (data: ReservationFilterDto) => {
      try {
        if (data.apartment === 'null')
          data.apartment = JSON.parse(data.apartment)

        const session = await getSession()
        let query: string = '?'
        if (data.freeTextSearch)
          query = query + `freeText=${data.freeTextSearch}`
        if (data.start)
          query = query + `${query.length > 1 ? '&' : ''}start=${data.start}`
        if (data.end)
          query = query + `${query.length > 1 ? '&' : ''}}&freeText=${data.end}`
        if (data.apartment)
          query =
            query + `${query.length > 1 ? '&' : ''}apartment=${data.apartment}`

        const response = await axiosInstance.get(`reservation/admin${query}`, {
          headers: { 'auth-token': session?.token as string },
        })

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

  return {
    handleSubmit,
    onSubmit,
    register,
    start,
    setValue,
    setStart,
    end,
    setEnd,
  }
}
