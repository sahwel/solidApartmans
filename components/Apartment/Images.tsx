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
import CustomImage from '../Image/CustomImage'

interface ImagesProps {
  images: string[]
}

const Images: FunctionComponent<ImagesProps> = memo(
  function Images({ images }) {
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
            className="w-6 cursor-pointer"
            onMouseLeave={handleHover(setFirstHover)}
          />
        ) : (
          <ArrowCircleLeftIcon
            className="w-6 cursor-pointer"
            onMouseEnter={handleHover(setFirstHover)}
          />
        )}
        <div className=" flex h-full w-[87%] justify-between space-x-4">
          <CustomImage
            url={images[1]}
            alt="image of the apartment"
            classNames="w-1/3 h-full"
          />
          <CustomImage
            url={'/static-apart.png'}
            alt="image of the apartment"
            classNames="w-1/3 h-full"
          />
          <CustomImage
            url={'/static-apart.png'}
            alt="image of the apartment"
            classNames="w-1/3 h-full"
          />
        </div>
        {scndHover ? (
          <SolidRight
            className="w-6 cursor-pointer"
            onMouseLeave={handleHover(setScndHover)}
          />
        ) : (
          <ArrowCircleRightIcon
            className="w-6 cursor-pointer"
            onMouseEnter={handleHover(setScndHover)}
          />
        )}
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.images.length === newProps.images.length
      ? oldProps.images.every((e, i) => e === newProps.images[i])
      : false
)

export default Images
