import { ArrowCircleLeftIcon } from '@heroicons/react/outline'
import { ArrowCircleRightIcon } from '@heroicons/react/outline'
import { ArrowCircleRightIcon as SolidRight } from '@heroicons/react/solid'
import { ArrowCircleLeftIcon as SolidLeft } from '@heroicons/react/solid'
import {
  Dispatch,
  FunctionComponent,
  memo,
  SetStateAction,
  useCallback,
  useState,
} from 'react'
import CustomImage from '../../Image/CustomImage'

interface ImagesProps {
  images: string[]
  secondIndex: number
  thirdIndex: number
  fourthIndex: number
  handleMove: (toLeft: boolean) => () => void
}

const Images: FunctionComponent<ImagesProps> = memo(
  function Images({
    images,
    fourthIndex,
    secondIndex,
    thirdIndex,
    handleMove,
  }) {
    const [scndHover, setScndHover] = useState(false)
    const [firstHover, setFirstHover] = useState(false)
    const handleHover = useCallback(
      (handle: Dispatch<SetStateAction<boolean>>) => {
        return () => {
          handle((oldState) => !oldState)
        }
      },
      []
    )

    return (
      <div className="hidden h-[6rem] items-center justify-between px-5 py-3 lg:flex">
        {firstHover ? (
          <SolidLeft
            onClick={handleMove(true)}
            className="w-6 cursor-pointer"
            onMouseLeave={handleHover(setFirstHover)}
          />
        ) : (
          <ArrowCircleLeftIcon
            onClick={handleMove(true)}
            className="w-6 cursor-pointer"
            onMouseEnter={handleHover(setFirstHover)}
          />
        )}
        <div className=" flex h-full w-[87%] justify-start space-x-4">
          {images.length > 1 && (
            <CustomImage
              url={images[secondIndex]}
              isFromApi={true}
              alt="image of the apartment"
              classNames="w-1/3 h-full"
            />
          )}
          {images.length > 2 && (
            <CustomImage
              url={images[thirdIndex]}
              isFromApi={true}
              alt="image of the apartment"
              classNames="w-1/3 h-full"
            />
          )}
          {images.length > 3 && (
            <CustomImage
              url={images[fourthIndex]}
              isFromApi={true}
              alt="image of the apartment"
              classNames="w-1/3 h-full"
            />
          )}
        </div>
        {scndHover ? (
          <SolidRight
            className="w-6 cursor-pointer"
            onClick={handleMove(false)}
            onMouseLeave={handleHover(setScndHover)}
          />
        ) : (
          <ArrowCircleRightIcon
            className="w-6 cursor-pointer"
            onClick={handleMove(false)}
            onMouseEnter={handleHover(setScndHover)}
          />
        )}
      </div>
    )
  },
  (oldProps, newProps) =>
    (oldProps.images.length === newProps.images.length
      ? oldProps.images.every((e, i) => e === newProps.images[i])
      : false) &&
    oldProps.secondIndex === newProps.secondIndex &&
    oldProps.thirdIndex === newProps.thirdIndex &&
    oldProps.fourthIndex === newProps.fourthIndex &&
    oldProps.handleMove === newProps.handleMove
)

export default Images
