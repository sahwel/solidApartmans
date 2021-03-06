import {
  Dispatch,
  FunctionComponent,
  memo,
  SetStateAction,
  useCallback,
  useState,
} from 'react'
import Tooltip from '@mui/material/Tooltip'
import { Button } from '../../Button'
import { useTranslation } from 'react-i18next'
import { BookFormModel } from './definitions'
import { FormatDate } from '../../../services/ReservationServices'
import router from 'next/router'
import { axiosInstance } from '../../../services/axiosInstance'
import { useModal } from '../../Modal/ModalProvider'
import { useToast } from '../../Common/Toast/Toast'

interface BookModalProps {
  total: number
  data: BookFormModel
  isCompany: boolean
}
const handleChange =
  (setter: Dispatch<SetStateAction<boolean>>, newState: boolean) => () =>
    setter(newState)

const BookModal: FunctionComponent<BookModalProps> = memo(
  function BookModal({ data, total, isCompany }) {
    const [isTotal, setIsTotal] = useState(false)
    const [accpect, setAccpect] = useState(false)
    const [isCreditCard, setIsCreditCard] = useState(true)
    const toast = useToast()

    const handleReservation = useCallback(async () => {
      try {
        const { id } = router.query
        console.log(data.houseNumber)

        await axiosInstance.post(`reservation/${id}`, {
          arrive: data.arrive,
          leave: data.leave,
          method: isCreditCard ? 'credit card' : 'bank transfer',
          customer: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phoneNumber,
            taxNumber: data.taxNumber,
            companyName: data.companyName,
            address: {
              country: data.country,
              zip_code: data.zipCode,
              city: data.city,
              street: data.street,
              house_number: data.houseNumber,
              other: data.other,
            },
            numberOfAdults: data.numberOfAdults,
            numberOfKids: data.numberOfKids ? data.numberOfKids : 0,
            underTwoYear: data.underTwoYears ? data.underTwoYears : false,
            babyBed: data.babyBed ? data.babyBed : false,
            highChair: data.highChair ? data.highChair : false,
            privatePerson: !isCompany,
          },
        })
        toast.success('Success')
      } catch (error: any) {
        toast.error(
          error.response
            ? error.response.data
              ? error.response.data.msgHU
                ? error.response.data.msgHU
                : error.response.data.msg
              : 'Egy hiba l??pett fel a k??r??s k??zben!'
            : error
        )
      }
    }, [data, toast, isCompany, isCreditCard])

    const { t } = useTranslation('Book')
    return (
      <div className="mt-3 space-y-5">
        <div className="grid grid-cols-2">
          <p>
            {t('form.arrive')}: {FormatDate(data.arrive)}
          </p>
          <p>
            {t('form.leave')}: {FormatDate(data.leave)}
          </p>
          <p>
            {t('form.adults')}: {data.numberOfAdults}
          </p>
          <p>
            {t('form.kids')}: {data.numberOfKids}
          </p>
        </div>
        <div>
          <div className="flex items-center justify-start">
            <input
              onChange={handleChange(setIsTotal, !isTotal)}
              checked={isTotal}
              type="checkbox"
              id="paymentTotal"
              className="mr-2 h-4 w-4 border-main-blue"
            />
            <span className="flex items-center">
              <label htmlFor="paymentTotal">{t('modal.payTotal')}</label>
              <Tooltip title={t('modal.payTotalTooltip') + ''}>
                <span className="ml-2 flex h-[1.2rem] w-[1.2rem] cursor-pointer items-center justify-center rounded-full bg-main-blue text-white ">
                  ?
                </span>
              </Tooltip>
            </span>
          </div>
          <div className="flex space-x-3">
            <div className="flex items-center justify-start">
              <input
                checked={isCreditCard}
                type="checkbox"
                onChange={handleChange(setIsCreditCard, true)}
                id="creditCard"
                className="mr-2 h-4 w-4 border-main-blue"
              />
              <label htmlFor="creditCard">{t('modal.creditCard')}</label>
            </div>
            <div className="flex items-center justify-start">
              <input
                type="checkbox"
                id="bankTransfer"
                checked={!isCreditCard}
                onChange={handleChange(setIsCreditCard, false)}
                className="mr-2 h-4 w-4 border-main-blue"
              />
              <label htmlFor="bankTransfer">{t('modal.bankTransfer')}</label>
            </div>
          </div>
          <div className="flex items-center justify-start">
            <input
              type="checkbox"
              id="houseRules"
              checked={accpect}
              onChange={handleChange(setAccpect, !accpect)}
              className="mr-2 h-4 w-4 border-main-blue"
            />
            <label htmlFor="houseRules">
              {t('modal.doYou')}
              <span className="font-bold">{t('modal.houseRules')}</span>
              &nbsp;{t('modal.and')}
              <span className="font-bold"> {t('modal.privacyPolicy')}</span>?
            </label>
          </div>
        </div>
        <div className="flex items-center justify-evenly">
          <p className="text-lg font-medium">
            {t('modal.total')} <span className="font-bold">{total} FT </span>
          </p>
          <Button
            title="Book"
            className="py-1 px-9"
            onClick={handleReservation}
          />
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.data.numberOfAdults === newProps.data.numberOfAdults &&
    oldProps.data.numberOfKids === newProps.data.numberOfKids &&
    oldProps.data.arrive === newProps.data.arrive &&
    oldProps.data.leave === newProps.data.leave
)

export default BookModal
