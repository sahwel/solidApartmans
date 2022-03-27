import { FunctionComponent, memo } from 'react'

interface ImagesBodyProps {
  images: string[]
}

const ImagesBody: FunctionComponent<ImagesBodyProps> = memo(
  function ImagesBody({ images }) {
    return (
      <div className="h-[90%] overflow-y-auto p-3">
        {images.length === 0 ? (
          <p className="flex h-full w-full items-center justify-center text-lg font-medium">
            Nincs feltöltve egy kép sem!
          </p>
        ) : undefined}
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.images.length === newProps.images.length
      ? oldProps.images.every((e, i) => e === newProps.images[i])
      : false
)

export default ImagesBody
