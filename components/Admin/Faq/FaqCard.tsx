import { ChevronDownIcon } from '@heroicons/react/solid'
import { FunctionComponent, memo, useCallback, useState } from 'react'
import cl from 'classnames'
import { AdminFaq } from '../../../services/faqDefinitions'
import FaqForm from './FaqForm'

interface FaqCardProps extends AdminFaq {
  // eslint-disable-next-line no-unused-vars
  deleteFaq: (_id: string) => void
}

const FaqCard: FunctionComponent<FaqCardProps> = memo(
  function FaqCard({
    answerEN,
    answerHU,
    questionEN,
    questionHU,
    _id,
    deleteFaq,
  }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = useCallback(() => {
      setIsOpen((oldState) => !oldState)
    }, [])

    return (
      <div className="relative rounded-lg border-2 border-main-blue p-3">
        <ChevronDownIcon
          className={cl(
            'absolute right-3 top-2 h-8 w-8 cursor-pointer transition duration-150 ease-in-out',
            isOpen && 'rotate-180'
          )}
          onClick={handleOpen}
        />
        {!isOpen ? (
          <div className="w-[90%]">
            <p>{questionHU}</p>
            <p>{questionEN}</p>
          </div>
        ) : (
          <FaqForm
            isCreate={false}
            faq={{ answerEN, answerHU, questionEN, questionHU, _id }}
            deleteFaq={deleteFaq}
          />
        )}
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.answerEN === newProps.answerEN &&
    oldProps.answerHU === newProps.answerHU &&
    oldProps._id === newProps._id &&
    oldProps.questionEN === newProps.questionEN &&
    oldProps.questionHU === newProps.questionHU &&
    oldProps.deleteFaq === newProps.deleteFaq
)

export default FaqCard
