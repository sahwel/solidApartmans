import { FunctionComponent } from 'react'
import cl from 'classnames'

interface BookHeaderProps {
  address: string
  isCompany: boolean
  setIsCompany: Function
}

const BookHeader: FunctionComponent<BookHeaderProps> = ({
  address,
  isCompany,
  setIsCompany,
}) => {
  return (
    <div className="relative flex w-full items-center justify-center text-center text-white md:py-5 md:text-main-text lg:!mb-10 lg:py-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/scndBg.svg"
        alt="background"
        className="absolute top-0 w-full md:hidden"
      />
      <div className=" flex h-[10rem] w-full flex-col items-center justify-center sm:h-[14rem] lg:h-fit">
        <h1 className="relative z-40 w-full py-5 text-center text-2xl font-bold md:pt-0 lg:py-3">
          {address}
        </h1>
        <div className="relative grid grid-cols-2">
          <button
            onClick={setIsCompany(false)}
            className={cl(
              'py-1 px-4',
              !isCompany ? 'bg-white text-main-text' : 'bg-[#161D6F]'
            )}
          >
            Private person
          </button>
          <button
            onClick={setIsCompany(true)}
            className={cl(
              'py-1 px-4',
              isCompany ? 'bg-white text-main-text' : 'bg-[#161D6F]'
            )}
          >
            Company
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookHeader
