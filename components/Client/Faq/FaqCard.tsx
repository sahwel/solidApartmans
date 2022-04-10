import React, { FunctionComponent, memo, useCallback, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import cl from 'classnames'
import { Faq } from '../../../services/faqDefinitions'
import { useTranslation } from 'react-i18next'

const FaqCard: FunctionComponent<Faq> = memo(
  function FaqCard({ answerHU, questionEN, questionHU, answerEN }) {
    const [isOpen, setIsOpen] = useState(false)

    const open = useCallback(() => {
      setIsOpen((oldState) => !oldState)
    }, [])

    const { i18n } = useTranslation()

    return (
      <div
        className="w-full cursor-pointer bg-white p-3 drop-shadow-lg lg:bg-transparent lg:drop-shadow-none"
        onClick={open}
      >
        <div className="flex justify-between">
          <p className="cursor-auto text-[108%] font-medium">
            {i18n.language === 'hu' ? questionHU : questionEN}
          </p>
          <div
            className={cl(
              'flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-main-blue transition duration-75 ease-in-out',
              isOpen && 'rotate-180'
            )}
          >
            <ChevronDownIcon className="h-6 w-6" />
          </div>
        </div>
        <p
          className={cl(!isOpen && 'hidden', 'cursor-auto pr-12 text-justify')}
        >
          {i18n.language === 'hu' ? answerHU : answerEN}
        </p>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.answerHU === newProps.answerHU &&
    oldProps.questionHU === newProps.questionHU &&
    oldProps.answerEN === newProps.answerEN &&
    oldProps.questionEN === newProps.questionEN
)

export default FaqCard
