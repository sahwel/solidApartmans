import { FunctionComponent, memo } from 'react'
import ImageCard from './ImageCard'

interface ImagesBodyProps {
  images: string[]
  imagesLength: number
  handleDeleteImg: (index: number) => () => void
  moveImg: (index: number, isUp: boolean, toFirst: boolean) => () => void
  isCreate: boolean
}

const ImagesBody: FunctionComponent<ImagesBodyProps> = memo(
  function ImagesBody({
    images,
    imagesLength,
    handleDeleteImg,
    moveImg,
    isCreate,
  }) {
    return (
      <div className="h-[90%] overflow-y-auto p-3">
        {images.length === 0 ? (
          <p className="flex h-full w-full items-center justify-center text-lg font-medium">
            Nincs feltöltve egy kép sem!
          </p>
        ) : (
          images.map((img, i) => (
            <ImageCard
              isCreate={isCreate}
              key={img}
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
    oldProps.moveImg === newProps.moveImg &&
    oldProps.isCreate === newProps.isCreate
)

export default ImagesBody
