import {
  Dispatch,
  FunctionComponent,
  memo,
  SetStateAction,
  useState,
} from 'react'
import Tooltip from '@mui/material/Tooltip'
import { Button } from '../../Button'

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

    return (
      <div className="mt-3 space-y-5">
        <div className="grid grid-cols-2">
          <p>Arrive: {arrive}</p>
          <p>Left: {left}</p>
          <p>Number of adults: {numberOfAdults}</p>
          <p>Number of kids: {numberOfKids}</p>
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
              <label htmlFor="paymentTotal">
                Do you want to pay the total?
              </label>
              <Tooltip
                title=" You can pay the 10% or the 100% of the total, however you you
                are only able these options"
              >
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
              <label htmlFor="creditCard">Credit card</label>
            </div>
            <div className="flex items-center justify-start">
              <input
                type="checkbox"
                id="bankTransfer"
                checked={!isCreditCard}
                onChange={handleChange(setIsCreditCard, false)}
                className="mr-2 h-4 w-4 border-main-blue"
              />
              <label htmlFor="bankTransfer">Bank transfer</label>
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
              Do you accept the<span className="font-bold"> house roules</span>
              &nbsp; and the <span className="font-bold"> privacy policy</span>?
            </label>
          </div>
        </div>
        <div className="flex items-center justify-evenly">
          <p className="text-lg font-medium">
            Total: <span className="font-bold">478000 FT </span>
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
