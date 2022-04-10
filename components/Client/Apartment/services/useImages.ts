import { useCallback, useState } from 'react'

export const useImages = (images: string[]) => {
  const [indexes, setIndexes] = useState<{
    firstIndex: number
    secondIndex: number
    thirdIndex: number
    fourthIndex: number
  }>({ firstIndex: 0, secondIndex: 1, thirdIndex: 2, fourthIndex: 3 })
  // eslint-disable-next-line no-undef
  const handleMove = useCallback(
    (toLeft: boolean) => () => {
      let first = indexes.firstIndex
      let second = indexes.secondIndex
      let third = indexes.thirdIndex
      let fourth = indexes.fourthIndex
      if (toLeft) {
        if (first === 0) {
          first = images.length - 1
        } else {
          first--
        }
        if (second === 0) {
          second = images.length - 1
        } else {
          second--
        }
        if (third === 0) {
          third = images.length - 1
        } else {
          third--
        }
        if (fourth === 0) {
          fourth = images.length - 1
        } else {
          fourth--
        }
      } else {
        if (first === images.length - 1) {
          first = 0
        } else {
          first++
        }
        if (second === images.length - 1) {
          second = 0
        } else {
          second++
        }
        if (third === images.length - 1) {
          third = 0
        } else {
          third++
        }
        if (fourth === images.length - 1) {
          fourth = 0
        } else {
          fourth++
        }
      }
      setIndexes({
        firstIndex: first,
        secondIndex: second,
        thirdIndex: third,
        fourthIndex: fourth,
      })
    },

    [images.length, indexes]
  )

  return {
    indexes,
    handleMove,
  }
}
