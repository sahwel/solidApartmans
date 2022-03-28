import { FunctionComponent, memo } from 'react'
import { Button } from '../../Button'

interface ReviewDeleteModalProps {
  custumer: string
  stars: number
  hide: () => void
}

const ReviewDeleteModal: FunctionComponent<ReviewDeleteModalProps> = memo(
  function ReviewDeleteModal({ custumer, stars, hide }) {
    return (
      <div className="grid h-[140px] space-y-2">
        <div className="place-self-end">
          Biztos törölni szeretnéd a(z) {custumer} {stars} csillagos
          értékelését?
        </div>
        <div className="flex justify-center space-x-3 self-start">
          <Button
            onClick={hide}
            title="Mégse"
            classNames="py-1 px-2 !bg-white !text-main-text hover:!bg-main-blue hover:!text-white"
          />
          <Button title="Törlés" classNames="py-1 px-2" />
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.custumer === newProps.custumer &&
    oldProps.stars === newProps.stars &&
    oldProps.hide === newProps.hide
)

export default ReviewDeleteModal
