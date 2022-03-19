import { FunctionComponent, memo } from 'react'
import CustomImage from '../Image/CustomImage'
import BookInput from './BookInput'

interface BookFormProps {
  isCompany: boolean
}

const BookForm: FunctionComponent<BookFormProps> = memo(function BookForm({
  isCompany,
}) {
  return (
    <form className="!mt-24 grid w-full space-y-5 px-5 pb-10 ">
      {isCompany && (
        <>
          <BookInput url="/company.svg" placeholder="Company name" />
          <BookInput url="/tax.svg" placeholder="Tax number" />
        </>
      )}
      <BookInput url="/user.svg" placeholder="First name" />
      <BookInput url="/user.svg" placeholder="Last name" />
      <BookInput url="/globe.svg" placeholder="Country" />
      <BookInput url="/hashtag.svg" placeholder="Zip code" />
      <BookInput url="/street.svg" placeholder="Street" />
      <BookInput url="/house.svg" placeholder="House number" />
      <BookInput url="/other.svg" placeholder="Other" />
      <BookInput url="/mailOutline.svg" placeholder="Email" />
      <BookInput url="/phoneOutline.svg" placeholder="Phone number" />
      <BookInput placeholder="Number of adults" type="number" min={1} />
      <BookInput placeholder="Number of kids" type="number" />

      <div className="flex items-center justify-start space-x-5">
        <input
          type="checkbox"
          name="underTwoYear"
          id="underTwoYear"
          className="h-5 w-5 border-main-blue"
        />
        <label htmlFor="underTwoYear">Kids are under two years old?</label>
      </div>
      <div className="flex items-center justify-start space-x-5">
        <input
          type="checkbox"
          name="babyBedReq"
          id="babyBedReq"
          className="h-5 w-5 border-main-blue"
        />
        <label htmlFor="babyBedReq">Do you need baby bed ?</label>
      </div>
      <div className="flex items-center justify-start space-x-5">
        <input
          type="checkbox"
          name="babyBedReq"
          id="babyBedReq"
          className="h-5 w-5 border-main-blue"
        />
        <label htmlFor="babyBedReq">Do you need high chair?</label>
      </div>
      <BookInput url="/calendar.svg" placeholder="Arrive" />
      <BookInput url="/calendar.svg" placeholder="Leave  " />
      <button className="p flex w-2/3 items-center justify-center space-x-3 justify-self-center bg-main-blue py-2 text-white">
        <p>Book</p>
        <CustomImage url="/calendarSolid.svg" alt="icon" classNames="w-5 h-5" />
      </button>
    </form>
  )
})

export default BookForm
