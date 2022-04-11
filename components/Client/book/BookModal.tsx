import {
  Dispatch,
  FunctionComponent,
  memo,
  SetStateAction,
  useState,
} from 'react'
import Tooltip from '@mui/material/Tooltip'
import { Button } from '../../Button'
import { useTranslation } from 'react-i18next'

interface BookModalProps {
  numberOfAdults: number
  numberOfKids: number
  arrive: string
  left: string
}
const handleChange =
  (setter: Dispatch<SetStateAction<boolean>>, newState: boolean) => () =>
    setter(newState)

const BookModal: FunctionComponent<BookModalProps> = memo(
  function BookModal({ arrive, left, numberOfAdults, numberOfKids }) {
    const [isTotal, setIsTotal] = useState(false)
    const [accpect, setAccpect] = useState(false)
    const [isCreditCard, setIsCreditCard] = useState(true)

    const { t } = useTranslation('Book')
    return (
      <div className="mt-3 space-y-5">
        <div className="grid grid-cols-2">
          <p>
            {t('form.arrive')}: {arrive}
          </p>
          <p>
            {t('form.leave')}: {left}
          </p>
          <p>
            {t('form.adults')}: {numberOfAdults}
          </p>
          <p>
            {t('form.kids')}: {numberOfKids}
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
            {t('modal.total')} <span className="font-bold">478000 FT </span>
          </p>
          <Button title="Book" className="py-1 px-9" />
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.numberOfAdults === newProps.numberOfAdults &&
    oldProps.numberOfKids === newProps.numberOfKids &&
    oldProps.arrive === newProps.arrive &&
    oldProps.left === newProps.left
)

export default BookModal
