import Image from 'next/image'
import { ArrowCircleLeftIcon } from '@heroicons/react/solid'
import { ArrowCircleRightIcon } from '@heroicons/react/solid'
import Images from './Images'

const ApartmentImage = () => {
  return (
    <div className="h-[18rem] w-full lg:h-[25rem] lg:w-1/2">
      <div className="relative h-[18rem] w-full lg:h-[19rem] ">
        <ArrowCircleLeftIcon className="absolute top-1/2 left-5 z-50 h-7 w-7 -translate-y-1/2 cursor-pointer text-white hover:text-main-text lg:hidden" />
        <Image
          src={'/static-apart.png'}
          layout="fill"
          className=" md:rounded-tl-2xl md:rounded-tr-2xl  lg:rounded-none"
          alt="image of the apartment"
        />
        <ArrowCircleRightIcon className="hover:text-main-textlg:hidden absolute top-1/2 right-5 z-50 h-7 w-7 -translate-y-1/2 cursor-pointer text-white hover:text-main-text lg:hidden" />
      </div>
      <Images />
    </div>
  )
}

export default ApartmentImage
