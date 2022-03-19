import { memo, useCallback, useState } from 'react'
import CustomImage from '../Image/CustomImage'
import cl from 'classnames'

const ContactUsForm = memo(function ContactUsForm() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = useCallback((e) => {
    e.preventDefault()
    setIsClicked(true)
  }, [])

  const handleMouseLeft = useCallback(() => {
    setIsClicked(false)
  }, [])
  return (
    <div className="bottom-0 grid w-full justify-items-center bg-white p-6">
      <p className="text-center">
        If none of the above won your favor send us a message
      </p>
      <form className="mt-10 grid w-full justify-items-center space-y-5">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full rounded-sm border-[1px] border-main-blue py-2 px-4 pr-12"
            placeholder="Email"
          />
          <div className="absolute top-1/2 right-3 -translate-y-1/2 transform">
            <CustomImage
              url="/mailOutline.svg"
              alt="icon of mail"
              classNames="w-6 h-6"
            />
          </div>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            className="w-full rounded-sm border-[1px] border-main-blue py-2 px-4 pr-12"
            placeholder="Email"
          />
          <div className="absolute top-1/2 right-3 -translate-y-1/2 transform">
            <CustomImage
              url="/pen.svg"
              alt="icon of mail"
              classNames="w-5 h-5"
            />
          </div>
        </div>
        <textarea
          className="h-24 w-full resize-y rounded-sm border-[1px] border-main-blue py-2 px-4"
          placeholder="Message"
        ></textarea>
        <button
          onClick={handleClick}
          onMouseLeave={handleMouseLeft}
          className="group relative  flex w-1/3 cursor-pointer  items-center justify-center space-x-2 overflow-hidden rounded-xl border-2 border-main-blue bg-main-blue py-2 px-4 font-bold text-white duration-300 hover:bg-white hover:text-main-text"
        >
          <p>Send</p>
          <CustomImage
            url="/send.svg"
            alt="icon of mail"
            imageClassName="!text-white"
            classNames="group-hover:hidden  w-4 h-4"
          />
          <CustomImage
            url="/sendHover.svg"
            alt="icon of mail"
            imageClassName="!text-white"
            classNames={cl(
              'hidden right-0 group-hover:block w-4 h-4 transition-all duration-[600ms] ease-in-out',
              isClicked && '-right-full'
            )}
          />
        </button>
      </form>
    </div>
  )
})

export default ContactUsForm
