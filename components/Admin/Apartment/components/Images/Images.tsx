import { FunctionComponent, memo } from 'react'
import ImageHedaer from './ImageHedaer'
import ImagesBody from './ImagesBody'
import cl from 'classnames'

interface ImagesProps {
  error?: boolean
  images: string[]
  handleAddImg: (newImg: File) => void
  handleDeleteImg: (index: number) => () => void
  moveImg: (index: number, isUp: boolean, toFirst: boolean) => () => void
  isCreate: boolean
}

const Images: FunctionComponent<ImagesProps> = memo(
  function Images({
    error,
    images,
    handleAddImg,
    handleDeleteImg,
    moveImg,
    isCreate,
  }) {
    return (
      <div
        className={cl(
          'h-[30rem] rounded-2xl border-2 border-main-blue p-3 ',
          error && '!border-red-600 !text-red-600'
        )}
      >
        {error}
        <ImageHedaer handleAddImg={handleAddImg} error={error} />
        <ImagesBody
          isCreate={isCreate}
          images={images}
          imagesLength={images.length}
          handleDeleteImg={handleDeleteImg}
          moveImg={moveImg}
        />
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.error === newProps.error &&
    oldProps.handleAddImg === newProps.handleAddImg &&
    oldProps.handleDeleteImg === newProps.handleDeleteImg &&
    oldProps.moveImg === newProps.moveImg &&
    oldProps.images === newProps.images
)

export default Images
