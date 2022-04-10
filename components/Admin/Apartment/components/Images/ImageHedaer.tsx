import { FunctionComponent, memo, useCallback } from 'react'
import CustomImage from '../../../../Image/CustomImage'
import cl from 'classnames'

interface ImageHeaderProps {
  handleAddImg: (newImg: File) => void
  error?: boolean
}

const ImageHedaer: FunctionComponent<ImageHeaderProps> = memo(
  function ImageHeader({ handleAddImg, error }) {
    const handleAdd = useCallback(
      (e) => {
        let file = e.target.files[0]
        handleAddImg(file)
        e.target.value = ''
      },
      [handleAddImg]
    )

    return (
      <div
        className={cl(
          'flex items-center justify-between border-b-2 border-main-blue pb-2',
          error && '!border-red-600'
        )}
      >
        <h1 className="text-xl font-bold">Képek</h1>
        <div className="flex cursor-pointer items-center">
          <CustomImage
            alt="add image icon"
            url="add-img.svg"
            className="h-10 w-10"
          />
          <input
            onChange={handleAdd}
            type="file"
            accept="image/*"
            className="hidden"
            id="apartment-upload-img"
          />
          <label
            htmlFor="apartment-upload-img"
            className="cursor-pointer font-bold"
          >
            Kép hozzáadása
          </label>
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.handleAddImg === newProps.handleAddImg &&
    oldProps.error === newProps.error
)

export default ImageHedaer
