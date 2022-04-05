import React, { FunctionComponent, memo } from 'react'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronDoubleUpIcon,
  TrashIcon,
} from '@heroicons/react/outline'
import CustomImage from '../../../../Image/CustomImage'

interface ImageCardProps {
  index: number
  img: string
  imagesLength: number
  handleDeleteImg: (index: number) => () => void
  moveImg: (index: number, isUp: boolean, toFirst: boolean) => () => void
  isCreate: boolean
}

const ImageCard: FunctionComponent<ImageCardProps> = memo(
  function ImageCard({
    index,
    imagesLength,
    handleDeleteImg,
    img,
    moveImg,
    isCreate,
  }) {
    return (
      <div className="mb-4 flex h-[10rem] justify-between border-2 border-main-blue">
        <div className="w-1/2">
          <CustomImage
            url={img}
            isFromApi={!isCreate}
            alt="image of the apartment"
            classNames="w-full h-full"
          />
        </div>
        <div className="flex p-2">
          {index > 1 && (
            <ChevronDoubleUpIcon
              className="h-6 w-6 cursor-pointer "
              onClick={moveImg(index, false, true)}
            />
          )}
          {index > 0 && (
            <ChevronUpIcon
              className="h-6 w-6 cursor-pointer"
              onClick={moveImg(index, true, false)}
            />
          )}
          {imagesLength - 1 !== index && (
            <ChevronDownIcon
              className="h-6 w-6 cursor-pointer"
              onClick={moveImg(index, false, false)}
            />
          )}
          <TrashIcon
            className="h-6 w-6 cursor-pointer"
            onClick={handleDeleteImg(index)}
          />
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.imagesLength === newProps.imagesLength &&
    oldProps.moveImg === newProps.moveImg &&
    oldProps.img === newProps.img &&
    oldProps.index === newProps.index &&
    oldProps.handleDeleteImg === newProps.handleDeleteImg
)

export default ImageCard
