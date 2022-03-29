import { FunctionComponent, memo } from 'react'
import ImageCard from './ImageCard'

interface ImagesBodyProps {
  images: string[]
  imagesLength: number
  // eslint-disable-next-line no-unused-vars
  handleDeleteImg: (index: number) => () => void
  // eslint-disable-next-line no-unused-vars
  moveImg: (index: number, isUp: boolean, toFirst: boolean) => () => void
}

const ImagesBody: FunctionComponent<ImagesBodyProps> = memo(
  function ImagesBody({ images, imagesLength, handleDeleteImg, moveImg }) {
    return (
      <div className="h-[90%] overflow-y-auto p-3">
        {images.length === 0 ? (
          <p className="flex h-full w-full items-center justify-center text-lg font-medium">
            Nincs feltöltve egy kép sem!
          </p>
        ) : (
          images.map((img, i) => (
            <ImageCard
              key={i}
              img={img}
              index={i}
              moveImg={moveImg}
              imagesLength={imagesLength}
              handleDeleteImg={handleDeleteImg}
            />
          ))
        )}
      </div>
    )
  },
  (oldProps, newProps) =>
    (oldProps.images.length === newProps.images.length
      ? oldProps.images.every((e, i) => e === newProps.images[i])
      : false) &&
    oldProps.imagesLength === newProps.imagesLength &&
    oldProps.handleDeleteImg === newProps.handleDeleteImg &&
    oldProps.moveImg === newProps.moveImg
)

export default ImagesBody
