import { FunctionComponent, memo } from 'react'
import cl from 'classnames'
import { Address, lookAddress } from '../../../services/apartmentDefinitions'
import { useTranslation } from 'react-i18next'

interface BookHeaderProps {
  address: Address
  isCompany: boolean
  name: string
  setIsCompany: Function
}

const BookHeader: FunctionComponent<BookHeaderProps> = memo(
  function BookHeader({ address, name, isCompany, setIsCompany }) {
    const { t } = useTranslation('Book')
    return (
      <div className="relative flex w-full items-center justify-center text-center text-white md:py-5 md:text-main-text lg:!mb-10 lg:py-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/scndBg.svg"
          alt="background"
          className="absolute top-0 w-full xlms:hidden"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/thirdBg.svg"
          alt="background"
          className="absolute top-0 hidden w-full md:!hidden xlms:block "
        />
        <div className=" flex h-[10rem] w-full flex-col items-center justify-center sm:h-[14rem] lg:h-fit">
          <h1 className="relative z-40 w-full text-center text-2xl font-bold md:pt-0 lg:py-3">
            {address.zip_code +
              ', ' +
              address.city +
              ' ' +
              address.street +
              ' ' +
              address.house_number}
          </h1>
          <p className="text-md relative mb-5 font-medium ">{name}</p>
          <div className="relative grid grid-cols-2">
            <button
              onClick={setIsCompany(false)}
              className={cl(
                'py-1 px-4',
                !isCompany
                  ? 'bg-white text-main-text lg:border-2 lg:border-main-blue'
                  : 'bg-[#161D6F] md:text-white'
              )}
            >
              {t('person')}
            </button>
            <button
              onClick={setIsCompany(true)}
              className={cl(
                'py-1 px-4',
                isCompany
                  ? 'bg-white text-main-text lg:border-2 lg:border-main-blue'
                  : 'bg-[#161D6F] md:text-white'
              )}
            >
              {t('company')}
            </button>
          </div>
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    lookAddress(oldProps.address, newProps.address) &&
    oldProps.isCompany === newProps.isCompany &&
    oldProps.name === newProps.name &&
    oldProps.setIsCompany === newProps.setIsCompany
)

export default BookHeader
