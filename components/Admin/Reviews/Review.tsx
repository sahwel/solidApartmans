import { StarIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/outline'
import { FunctionComponent, memo, useCallback, useState } from 'react'
import { useModal } from '../../Modal/ModalProvider'
import ReviewDeleteModal from './ReviewDeleteModal'

interface ReviewProps {
  review: string
  apartment?: string
}

const Review: FunctionComponent<ReviewProps> = memo(
  function Review({ review, apartment }) {
    const [isHover, setIsHover] = useState(false)
    const handleHover = useCallback((newState: boolean) => {
      return () => setIsHover(newState)
    }, [])

    const modal = useModal()
    const openModal = useCallback(() => {
      modal.show(
        <ReviewDeleteModal custumer="John Doe" stars={4} hide={modal.hide} />
      )
      setIsHover(false)
    }, [modal])

    return (
      <div
        onMouseLeave={handleHover(false)}
        className="relative grid grid-rows-6 rounded-lg border-2 border-main-blue p-3"
        onMouseEnter={handleHover(true)}
      >
        {isHover && (
          <div
            className="absolute flex h-full w-full cursor-pointer items-center justify-center bg-main-blur text-white"
            onClick={openModal}
          >
            <XIcon className="h-40 w-40" />
          </div>
        )}
        <div className="row-start-1 row-end-2 flex items-start justify-between">
          <h1 className="font-medium">John Doe</h1>
          <div className="flex items-center">
            <span>4</span>
            <StarIcon className="h-5 w-5" />
          </div>
        </div>
        <p className="row-start-2 row-end-6 overflow-auto text-justify">
          {review}
        </p>
        <div className="flex items-end justify-between">
          <p>2022.11.02 - 2022.11.14</p>
          {apartment && <p>{apartment}</p>}
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.apartment === newProps.apartment &&
    oldProps.review === newProps.review
)

export default Review
