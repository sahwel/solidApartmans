import {
  FunctionComponent,
  memo,
  useCallback,
  useState,
  lazy,
  Suspense,
} from 'react'
import { useForm } from 'react-hook-form'
import CustomImage from '../Image/CustomImage'
import BookCheckbox from './BookCheckbox'
import BookInput from './BookInput'
import { BookFormModel } from './definitions'
import cl from 'classnames'
import { useModal } from '../Modal/ModalProvider'

const ModalHeader = lazy(() => import('./BookModalHeader'))
const BookModal = lazy(() => import('./BookModal'))

interface BookFormProps {
  isCompany: boolean
  address: string
  name: string
}

const BookForm: FunctionComponent<BookFormProps> = memo(
  function BookForm({ isCompany, address, name }) {
    const { register, formState, handleSubmit } = useForm<BookFormModel>()
    const onSubmit = (data: BookFormModel) =>
      modal.show(
        <Suspense fallback={<p>Loading...</p>}>
          <BookModal
            arrive="2022-11-02"
            left="2022-11-07"
            numberOfAdults={1}
            numberOfKids={1}
          />
        </Suspense>,
        <Suspense fallback={<p>Loading...</p>}>
          <ModalHeader address={address} name={name} />
        </Suspense>
      )

    const [isUnderTwoYears, setIsUnderTwoYears] = useState(false)
    const _setIsUnderTwoYears = useCallback(() => {
      setIsUnderTwoYears((oldState) => !oldState)
    }, [])

    const modal = useModal()
    return (
      <form
        className="!mt-24 grid w-full space-y-5 px-5 pb-10 md:!mt-0 lg:grid-cols-12 lg:gap-4 lg:space-y-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isCompany && (
          <>
            <BookInput
              classNames="lg:col-start-1 lg:col-end-7"
              isRequired={isCompany}
              formState={formState}
              url="/company.svg"
              placeholder="Company name"
              register={register}
              property={'companyName'}
            />
            <BookInput
              classNames="lg:col-start-7 lg:col-end-13"
              isRequired={isCompany}
              formState={formState}
              url="/tax.svg"
              placeholder="Tax number"
              register={register}
              property={'taxNumber'}
            />
          </>
        )}
        <BookInput
          formState={formState}
          url="/user.svg"
          classNames="lg:col-start-1 lg:col-end-4"
          placeholder="First name"
          register={register}
          property={'firstName'}
        />
        <BookInput
          formState={formState}
          url="/user.svg"
          placeholder="Last name"
          classNames="lg:col-start-4 lg:col-end-7"
          register={register}
          property={'lastName'}
        />
        <BookInput
          formState={formState}
          classNames="lg:col-start-7 lg:col-end-11"
          url="/globe.svg"
          placeholder="Country"
          register={register}
          property={'country'}
        />
        <BookInput
          formState={formState}
          url="/hashtag.svg"
          classNames="lg:col-start-11 lg:col-end-13"
          placeholder="Zip code"
          register={register}
          property={'zipCode'}
        />
        <BookInput
          formState={formState}
          url="/street.svg"
          classNames="lg:col-start-7 lg:col-end-13"
          placeholder="Street"
          register={register}
          property={'companyName'}
        />
        <BookInput
          formState={formState}
          url="/house.svg"
          placeholder="House number"
          register={register}
          classNames="lg:col-start-7 lg:col-end-10"
          property={'street'}
        />
        <BookInput
          formState={formState}
          url="/other.svg"
          classNames="lg:col-start-10 lg:col-end-13"
          placeholder="Other"
          register={register}
          property={'other'}
        />
        <BookInput
          formState={formState}
          url="/mailOutline.svg"
          placeholder="Email"
          classNames={cl(
            'lg:col-start-1 lg:col-end-7 lg:row-start-3',
            !isCompany && 'lg:!row-start-2'
          )}
          register={register}
          property={'email'}
        />
        <BookInput
          url="/phoneOutline.svg"
          classNames={cl(
            'lg:col-start-1 lg:col-end-7 lg:row-start-4 ',
            !isCompany && 'lg:!row-start-3'
          )}
          formState={formState}
          placeholder="Phone number"
          register={register}
          property={'phoneNumber'}
        />
        <BookInput
          placeholder="Number of adults"
          formState={formState}
          type="number"
          classNames="lg:col-start-1 lg:col-end-4"
          min={1}
          register={register}
          property={'numberOfAdults'}
        />
        <BookInput
          formState={formState}
          placeholder="Number of kids"
          classNames="lg:col-start-4 lg:col-end-7"
          type="number"
          register={register}
          property={'numberOfKids'}
        />
        <div className="lg:row-start-13 lg:col-start-1 lg:col-end-13 lg:grid lg:justify-center lg:space-y-1">
          <BookCheckbox
            id="underTwoYears"
            title="Kids are under two years old?"
            register={register}
            onChange={_setIsUnderTwoYears}
            property={'underTwoYears'}
          />
          {isUnderTwoYears && (
            <>
              <BookCheckbox
                id="babyBed"
                title="Do you need baby bed?"
                register={register}
                property={'babyBed'}
              />
              <BookCheckbox
                id="highChair"
                title="Do you need high chair?"
                register={register}
                property={'highChair'}
              />
            </>
          )}
        </div>
        <BookInput
          formState={formState}
          url="/calendar.svg"
          placeholder="Arrive"
          register={register}
          classNames={cl(
            'lg:col-start-7 lg:col-end-10 lg:row-start-5',
            !isCompany && 'lg:!row-start-4'
          )}
          property={'arrive'}
        />
        <BookInput
          url="/calendar.svg"
          formState={formState}
          placeholder="Leave "
          classNames={cl(
            'lg:col-start-10 lg:col-end-13 lg:row-start-5',
            !isCompany && 'lg:!row-start-4'
          )}
          register={register}
          property={'left'}
        />
        <button
          type="submit"
          className="p flex w-2/3 items-center justify-center space-x-3 justify-self-center bg-main-blue py-2 text-white lg:col-start-5 lg:col-end-9 lg:row-start-7 lg:max-w-[15rem]"
        >
          <p>Book</p>
          <CustomImage
            url="/calendarSolid.svg"
            alt="icon"
            classNames="w-5 h-5"
          />
        </button>
      </form>
    )
  },
  (oldProps, newProps) =>
    oldProps.isCompany === newProps.isCompany &&
    oldProps.address === newProps.address &&
    oldProps.name === newProps.name
)

export default BookForm
