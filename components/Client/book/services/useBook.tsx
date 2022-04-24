import router from 'next/router'
import { lazy, Suspense, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Address } from '../../../../services/apartmentDefinitions'
import { axiosInstance } from '../../../../services/axiosInstance'
import { useToast } from '../../../Common/Toast/Toast'
import { useModal } from '../../../Modal/ModalProvider'
import { BookFormModel } from '../definitions'

const ModalHeader = lazy(() => import('../BookModalHeader'))
const BookModal = lazy(() => import('../BookModal'))

export const useBook = (address: Address, name: string, isCompany: boolean) => {
  const [arrive, setArrive] = useState<Date | null>(null)
  const [leave, setLeave] = useState<Date | null>(null)
  const [endLeave, setEndLeave] = useState<Date | null>(null)
  const [isUnderTwoYears, setIsUnderTwoYears] = useState(false)

  const { register, formState, handleSubmit, setValue, control, clearErrors } =
    useForm<BookFormModel>({ defaultValues: { numberOfAdults: 1 } })
  const commonT = useTranslation('Common')
  const toast = useToast()
  const onSubmit = async (data: BookFormModel) => {
    try {
      const { id } = router.query
      const response = await axiosInstance.get(
        `reservation/total/${id}/${data.arrive}/${data.leave}/${
          data.numberOfAdults
        }/${data.numberOfKids ? data.numberOfKids : 0}`
      )

      const total = response.data.total
      modal.show(
        <Suspense fallback={<p>{commonT.t('loading')}</p>}>
          <BookModal data={data} total={total} isCompany={isCompany} />
        </Suspense>,
        <Suspense fallback={<p>{commonT.t('loading')}</p>}>
          <ModalHeader address={address} name={name} />
        </Suspense>
      )
    } catch (error: any) {
      toast.error(
        error.response
          ? error.response.data
            ? error.response.data.msgHU
              ? error.response.data.msgHU
              : error.response.data.msg
            : 'Egy hiba lépett fel a kérés közben!'
          : error
      )
    }
  }

  const _setArrive = useCallback((date: Date) => {
    setArrive(date)
    setLeave(null)
  }, [])

  const _setIsUnderTwoYears = useCallback(() => {
    setIsUnderTwoYears((oldState) => !oldState)
  }, [])

  const modal = useModal()

  const { t } = useTranslation('Book')

  return {
    handleSubmit,
    onSubmit,
    register,
    t,
    formState,
    _setIsUnderTwoYears,
    isUnderTwoYears,
    setEndLeave,
    setLeave,
    leave,
    arrive,
    _setArrive,
    control,
    clearErrors,
    setValue,
    endLeave,
  }
}
