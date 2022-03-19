import { memo } from 'react'

const ContactHeader = memo(function ContactHeader() {
  return (
    <div className="relative flex w-full items-center justify-center text-center text-white md:py-5 md:text-main-text">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/scndBg.svg"
        alt="background"
        className="absolute top-0 w-full md:hidden"
      />
      <div className=" flex h-[10rem] w-full flex-col items-center justify-center sm:h-[14rem]">
        <h1 className="relative z-40 w-full py-5 text-center text-2xl font-bold md:pt-0">
          Contact Us
        </h1>
        <p className="relative z-20 px-14 text-[90%]">
          Please get in touch and our team will answer all your questions
        </p>
      </div>
    </div>
  )
})

export default ContactHeader
