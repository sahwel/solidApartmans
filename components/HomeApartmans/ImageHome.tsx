import { StarIcon } from '@heroicons/react/solid'
import { FunctionComponent } from 'react'
import Image from 'next/image'

interface ImageHomeProps {
  stars: number
}

const ImageHome: FunctionComponent<ImageHomeProps> = ({ stars }) => {
  return (
    <div className="relative h-[60%] w-full md:h-full md:w-[40%]">
      <Image
        src="/static-apart.png"
        layout="fill"
        quality={100}
        loading="lazy"
        className="rounded-tr-2xl rounded-tl-2xl  md:rounded-bl-2xl md:rounded-tr-none "
        alt="Picture of the apartment"
      />
      <p className="absolute top-5 right-5 rounded-3xl bg-main-blue p-1 px-4 text-white md:hidden">
        min. 13000 Ft
      </p>
      <p className="absolute right-5 top-5 hidden items-center rounded-3xl bg-main-blue p-1 px-8 text-white md:flex">
        <span>{stars}</span>
        <StarIcon className="h-5 w-5" />
      </p>
    </div>
  )
}

export default ImageHome
