import { useCallback, useState } from 'react'

export const useImages = () => {
  const [images, setImages] = useState<string[]>([])
  const handleDeleteImg = useCallback(
    (index: number) => () => {
      let newImages = [...images]
      newImages.splice(index, 1)
      setImages(newImages)
    },
    [images]
  )

  const moveImg = useCallback(
    (index: number, isUp: boolean, toFirst: boolean) => () => {
      const newImages = [...images]
      const oldImg = newImages[toFirst ? 0 : index - (isUp ? 1 : -1)]
      newImages[toFirst ? 0 : index - (isUp ? 1 : -1)] = newImages[index]
      newImages[index] = oldImg
      setImages(newImages)
    },
    [images]
  )

  const handleAddImg = useCallback(
    (newImg: File) => {
      const newImages = [...images]
      const reader = new FileReader()
      reader.readAsDataURL(newImg)
      reader.onloadend = function () {
        newImages.unshift(reader.result?.toString() || '')
        setImages(newImages)
      }
    },
    [images]
  )
  return { handleAddImg, moveImg, images, handleDeleteImg }
}
