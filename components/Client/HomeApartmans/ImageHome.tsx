import { StarIcon } from '@heroicons/react/solid'
import { FunctionComponent, memo } from 'react'
import CustomImage from '../../Image/CustomImage'

interface ImageHomeProps {
  stars: number
  image: string
}

const ImageHome: FunctionComponent<ImageHomeProps> = memo(
  function ImageHome({ stars, image }) {
    return (
      <div className="relative h-[60%] w-full md:h-full md:w-[40%]">
        <CustomImage
          url={image}
          isFromApi={true}
          classNames="h-full w-full"
          imageClassName="rounded-tr-2xl rounded-tl-2xl  md:rounded-bl-2xl md:rounded-tr-none "
          alt="Picture of the apartment"
        />
        <p className="absolute top-5 right-5 rounded-3xl bg-main-blue p-1 px-4 text-white md:hidden">
          min. 13000 Ft
        </p>
        <p className="absolute right-5 top-5 hidden items-center rounded-3xl bg-main-blue p-1 px-8 text-white md:flex">
          <span>{stars === 0 ? "N/A" : stars}</span>
          <StarIcon className="h-5 w-5" />
        </p>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.stars === newProps.stars && oldProps.image === newProps.image
)

export default ImageHome
