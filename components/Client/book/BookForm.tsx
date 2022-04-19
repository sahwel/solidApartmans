import {
  FunctionComponent,
  memo,
  useCallback,
  useState,
  lazy,
  Suspense,
} from 'react'
import { useForm } from 'react-hook-form'
import BookCheckbox from './BookCheckbox'
import BookInput from './BookInput'
import { BookFormModel } from './definitions'
import cl from 'classnames'
import { useModal } from '../../Modal/ModalProvider'
import CustomImage from '../../Image/CustomImage'
import { Address } from '../../../services/apartmentDefinitions'
import { useTranslation } from 'react-i18next'
import BookCalendar from './BookCalendar'

const ModalHeader = lazy(() => import('./BookModalHeader'))
const BookModal = lazy(() => import('./BookModal'))

interface BookFormProps {
  isCompany: boolean
  address: Address
  name: string
  notFreeTimes: Date[]
}

const BookForm: FunctionComponent<BookFormProps> = memo(
  function BookForm({ isCompany, address, name, notFreeTimes }) {
    const {
      register,
      formState,
      handleSubmit,
      setValue,
      control,
      clearErrors,
    } = useForm<BookFormModel>()
    const commonT = useTranslation('Common')
    const onSubmit = (data: BookFormModel) =>
      modal.show(
        <Suspense fallback={<p>{commonT.t('loading')}</p>}>
          <BookModal
            arrive="2022-11-02"
            left="2022-11-07"
            numberOfAdults={1}
            numberOfKids={1}
          />
        </Suspense>,
        <Suspense fallback={<p>{commonT.t('loading')}</p>}>
          <ModalHeader address={address} name={name} />
        </Suspense>
      )

    const [arrive, setArrive] = useState<Date | null>(null)
    const [leave, setLeave] = useState<Date | null>(null)

    const [isUnderTwoYears, setIsUnderTwoYears] = useState(false)
    const _setIsUnderTwoYears = useCallback(() => {
      setIsUnderTwoYears((oldState) => !oldState)
    }, [])

    const modal = useModal()

    const { errors } = formState
    const { t } = useTranslation('Book')

    return (
      <form
        className="!mt-24 grid w-full space-y-5 px-5 pb-10 md:!mt-0 lg:grid-cols-12 lg:gap-4 lg:space-y-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isCompany && (
          <>
            <BookInput
              className="lg:col-start-1 lg:col-end-7"
              isRequired={isCompany}
              formState={formState}
              url="company.svg"
              placeholder={t('form.company')}
              register={register}
              property={'companyName'}
            />
            <BookInput
              className="lg:col-start-7 lg:col-end-13"
              isRequired={isCompany}
              formState={formState}
              url="tax.svg"
              placeholder={t('form.taxNumber')}
              register={register}
              property={'taxNumber'}
            />
          </>
        )}
        <BookInput
          formState={formState}
          url="user.svg"
          className="lg:col-start-1 lg:col-end-4"
          placeholder={t('form.firstName')}
          register={register}
          property={'firstName'}
        />
        <BookInput
          formState={formState}
          url="user.svg"
          placeholder={t('form.lastName')}
          className="lg:col-start-4 lg:col-end-7"
          register={register}
          property={'lastName'}
        />
        <BookInput
          formState={formState}
          className="lg:col-start-7 lg:col-end-11"
          url="globe.svg"
          placeholder={t('form.country')}
          register={register}
          property={'country'}
        />
        <BookInput
          formState={formState}
          url="hashtag.svg"
          className="lg:col-start-11 lg:col-end-13"
          placeholder={t('form.zip')}
          register={register}
          property={'zipCode'}
        />
        <BookInput
          formState={formState}
          url="street.svg"
          className="lg:col-start-7 lg:col-end-10"
          placeholder={t('form.city')}
          register={register}
          property={'city'}
        />
        <BookInput
          formState={formState}
          url="street.svg"
          className="lg:col-start-10 lg:col-end-13"
          placeholder={t('form.street')}
          register={register}
          property={'street'}
        />
        <BookInput
          formState={formState}
          url="house.svg"
          placeholder={t('form.house')}
          register={register}
          type="number"
          className="lg:col-start-7 lg:col-end-10"
          property={'street'}
        />
        <BookInput
          formState={formState}
          url="other.svg"
          className="lg:col-start-10 lg:col-end-13"
          placeholder={t('form.other')}
          register={register}
          property={'other'}
        />
        <BookInput
          formState={formState}
          url="mailOutline.svg"
          placeholder="Email"
          className={cl(
            'lg:col-start-1 lg:col-end-7 lg:row-start-3',
            !isCompany && 'lg:!row-start-2'
          )}
          register={register}
          property={'email'}
        />
        <BookInput
          url="phoneOutline.svg"
          className={cl(
            'lg:col-start-1 lg:col-end-7 lg:row-start-4 ',
            !isCompany && 'lg:!row-start-3'
          )}
          formState={formState}
          placeholder={t('form.phone')}
          register={register}
          property={'phoneNumber'}
        />
        <BookInput
          placeholder={t('form.adults')}
          formState={formState}
          type="number"
          className="lg:col-start-1 lg:col-end-4"
          min={1}
          register={register}
          property={'numberOfAdults'}
        />
        <BookInput
          formState={formState}
          placeholder={t('form.kids')}
          isRequired={false}
          className="lg:col-start-4 lg:col-end-7"
          type="number"
          register={register}
          property={'numberOfKids'}
        />
        <div className="lg:row-start-13 lg:col-start-1 lg:col-end-13 lg:grid lg:justify-center lg:space-y-1">
          <BookCheckbox
            id="underTwoYears"
            title={t('form.underTwo')}
            disabled={false}
            register={register}
            onChange={_setIsUnderTwoYears}
            property={'underTwoYears'}
          />
          {isUnderTwoYears && (
            <>
              <BookCheckbox
                id="babyBed"
                title={t('form.babyBed')}
                register={register}
                property={'babyBed'}
              />
              <BookCheckbox
                id="highChair"
                title={t('form.highChair')}
                register={register}
                property={'highChair'}
              />
            </>
          )}
        </div>

        <BookCalendar
          excludeDates={notFreeTimes.map((e) => new Date(e))}
          clearErrors={clearErrors}
          control={control}
          setValue={setValue}
          formValue="arrive"
          error={errors.arrive?.message}
          className="cursor-pointer lg:col-start-7 lg:col-end-10 lg:row-start-5"
          getter={arrive}
          setter={setArrive}
          isCompany={isCompany}
        />
        <BookCalendar
          clearErrors={clearErrors}
          control={control}
          excludeDates={[]}
          formValue="leave"
          setValue={setValue}
          getter={leave}
          error={errors.leave?.message}
          className="cursor-pointer lg:col-start-10 lg:col-end-13 lg:row-start-5"
          setter={setLeave}
          isCompany={isCompany}
          readOnly={arrive === null}
        />

        <button
          type="submit"
          className="p flex w-2/3 items-center justify-center space-x-3 justify-self-center bg-main-blue py-2 text-white lg:col-start-5 lg:col-end-9 lg:row-start-7 lg:max-w-[15rem]"
        >
          <p>{t('form.book')}</p>
          <CustomImage url="calendarSolid.svg" alt="icon" className="h-5 w-5" />
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
