import React, { FunctionComponent, memo } from 'react'
import { Faq } from '../../../services/faqDefinitions'
import FaqCard from './FaqCard'

interface FaqsCotnainerProps {
  faqs: Faq[]
  deleteFaq: (_id: string) => void
}

const FaqsCotnainer: FunctionComponent<FaqsCotnainerProps> = memo(
  function FaqsCotnainer({ faqs, deleteFaq }) {
    return (
      <div className="space-y-6">
        {faqs.map((e, i) => (
          <FaqCard key={e._id} {...e} deleteFaq={deleteFaq} />
        ))}
      </div>
    )
  },
  (oldProps, newProps) =>
    (oldProps.faqs.length === newProps.faqs.length
      ? oldProps.faqs.every(
          (e, i) =>
            e.answerHU === newProps.faqs[i].answerHU &&
            e._id === newProps.faqs[i]._id &&
            e.questionHU === newProps.faqs[i].questionHU &&
            e.answerEN === newProps.faqs[i].answerEN &&
            e.questionEN === newProps.faqs[i].questionEN
        )
      : false) && oldProps.deleteFaq === newProps.deleteFaq
)

export default FaqsCotnainer
