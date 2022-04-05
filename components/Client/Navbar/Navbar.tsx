import { MenuAlt1Icon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { memo } from 'react'
import { useCallback, useState } from 'react'
import cl from 'classnames'

export const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const setOpen = useCallback(() => {
    setIsOpen((oldState) => !oldState)
  }, [])

  return (
    <div className="border-b-[1px] border-main-blue text-main-text md:flex md:justify-between md:border-0 md:text-white">
      <div className="flex items-center justify-between p-3 py-2 md:items-start">
        <h1 className="cursor-pointer text-2xl font-bold">
          <Link href={'/'} passHref>
            Solid
          </Link>
          <br />
          <Link href={'/'} passHref>
            Apartmans
          </Link>
        </h1>
        <MenuAlt1Icon
          className="h-8 w-8 cursor-pointer text-main-text md:hidden"
          onClick={setOpen}
        />
      </div>
      <div
        className={cl(
          'fixed -right-[200%] top-0 z-[1000000000] flex h-screen w-full transition-all duration-500 ease-in-out md:static md:right-0 md:h-auto md:w-auto md:transition-none',
          isOpen && '!right-0'
        )}
      >
        <div className="mw:w-0 w-1/2 md:hidden" onClick={setOpen}></div>
        <div className=" w-1/2  border-l-2 bg-white  p-4 md:flex md:w-full md:border-0 md:bg-transparent">
          <ul className="w-full md:flex  md:justify-between md:space-x-5">
            <li className="flex w-full cursor-pointer justify-between md:block md:w-auto">
              <Link href={'/'} passHref>
                <span>Apartments</span>
              </Link>
              <XIcon
                className="h-5 w-5 cursor-pointer md:hidden md:h-0 md:w-0"
                onClick={setOpen}
              ></XIcon>
            </li>
            <Link href={'/faq'} passHref>
              <li className="cursor-pointer">FAQ</li>
            </Link>
            <Link href={'/contact'} passHref>
              <li className="cursor-pointer">Contact us</li>
            </Link>
          </ul>
        </div>
      </div>
      {/*   eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={'/background.svg'}
        className="absolute -z-10  w-screen"
        alt="background"
      />
    </div>
  )
})
