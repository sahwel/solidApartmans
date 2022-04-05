import React, { FunctionComponent, memo } from 'react'
import { Faq } from '../../../services/faqDefinitions'
import FaqForm from './FaqForm'

interface CreateFaqProps {
  addFaq: (faq: Faq) => Promise<void>
}

const CreateFaq: FunctionComponent<CreateFaqProps> = memo(
  function CreateFaq({ addFaq }) {
    return (
      <div className="min-w-[35vw] p-3">
        <FaqForm isCreate={true} addFaq={addFaq} />
      </div>
    )
  },
  (oldProps, newProps) => oldProps.addFaq === newProps.addFaq
)

export default CreateFaq
