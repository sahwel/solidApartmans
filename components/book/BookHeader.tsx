import { FunctionComponent, memo } from 'react'
import cl from 'classnames'

interface BookHeaderProps {
  address: string
  isCompany: boolean
  name: string
  setIsCompany: Function
}

const BookHeader: FunctionComponent<BookHeaderProps> = memo(
  function BookHeader({ address, name, isCompany, setIsCompany }) {
    return (
      <div className="relative flex w-full items-center justify-center text-center text-white md:py-5 md:text-main-text lg:!mb-10 lg:py-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/scndBg.svg"
          alt="background"
          className="absolute top-0 w-full md:hidden"
        />
        <div className=" flex h-[10rem] w-full flex-col items-center justify-center sm:h-[14rem] lg:h-fit">
          <h1 className="relative z-40 w-full pt-5 text-center text-2xl font-bold md:pt-0 lg:py-3">
            {address}
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
              Private person
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
              Company
            </button>
          </div>
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.address === newProps.address &&
    oldProps.isCompany === newProps.isCompany &&
    oldProps.name === newProps.name &&
    oldProps.setIsCompany === newProps.setIsCompany
)

export default BookHeader
