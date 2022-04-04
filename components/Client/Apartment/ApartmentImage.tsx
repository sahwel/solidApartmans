import { ArrowCircleLeftIcon } from '@heroicons/react/solid'
import { ArrowCircleRightIcon } from '@heroicons/react/solid'
import Images from './Images'
import { FunctionComponent, memo } from 'react'
import CustomImage from '../../Image/CustomImage'

interface ApartmentImageProps {
  images: string[]
}

const ApartmentImage: FunctionComponent<ApartmentImageProps> = memo(
  function ApartmentImage({ images }) {
    return (
      <div className="h-[18rem] w-full lg:h-[25rem] lg:w-1/2">
        <div className="relative h-[18rem] w-full lg:h-[19rem] ">
          <ArrowCircleLeftIcon className="absolute top-1/2 left-5 z-50 h-7 w-7 -translate-y-1/2 cursor-pointer text-white hover:text-main-text lg:hidden" />
          <CustomImage
            url={images[0]}
            isFromApi={true}
            alt="image of the apartment"
            classNames="w-full h-full "
            imageClassName="  md:rounded-tl-2xl md:rounded-tr-2xl  lg:rounded-none"
          />
          <ArrowCircleRightIcon className="hover:text-main-textlg:hidden absolute top-1/2 right-5 z-50 h-7 w-7 -translate-y-1/2 cursor-pointer text-white hover:text-main-text lg:hidden" />
        </div>
        <Images images={images} />
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.images.length === newProps.images.length
      ? oldProps.images.every((e, i) => e === newProps.images[i])
      : false
)

export default ApartmentImage
