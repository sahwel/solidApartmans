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
  // eslint-disable-next-line no-unused-vars
  handleDeleteImg: (index: number) => () => void
  // eslint-disable-next-line no-unused-vars
  moveImg: (index: number, isUp: boolean, toFirst: boolean) => () => void
}

const ImageCard: FunctionComponent<ImageCardProps> = memo(
  function ImageCard({ index, imagesLength, handleDeleteImg, img, moveImg }) {
    return (
      <div className="mb-4 flex h-[10rem] justify-between border-2 border-main-blue">
        <div className="w-1/2">
          <CustomImage
            url={img}
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
