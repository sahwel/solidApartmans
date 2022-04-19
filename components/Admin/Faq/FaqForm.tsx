import React, { FunctionComponent, memo } from 'react'
import { Faq } from '../../../services/faqDefinitions'
import AdminInput from '../../Common/AdminInput'
import FaqInput from './FaqInput'
import { Button } from '../../Button'
import { useFaqForm } from './useFaqForm'

interface FaqFormProps {
  isCreate: boolean
  faq?: Faq
  addFaq?: (faq: Faq) => Promise<void>
  deleteFaq?: (_id: string) => void
}

const FaqForm: FunctionComponent<FaqFormProps> = memo(
  function FaqForm({
    faq,
    isCreate,
    addFaq = async (faq: Faq) => {},
    deleteFaq = (_id: string) => ({}),
  }) {
    const { handleDelete, onSubmit, handleSubmit, register, formState } =
      useFaqForm(isCreate, addFaq, deleteFaq, faq)

    const { errors } = formState
    return (
      <form className="grid space-y-3 py-3" onSubmit={handleSubmit(onSubmit)}>
        <AdminInput
          labeFor="faq-question-hu"
          label="Kérdés"
          error={errors.questionHU?.message}
        >
          <FaqInput
            id="faq-question-hu"
            placeholder="Van wifi?"
            register={register('questionHU', {
              required: 'Ez a mező kötelező!',
            })}
            error={errors.questionHU?.message}
          />
        </AdminInput>
        <AdminInput
          labeFor="faq-answer-hu"
          label="Válasz"
          error={errors.answerHU?.message}
        >
          <FaqInput
            id="faq-answer-hu"
            placeholder="Igen, van ingyenes wifi."
            register={register('answerHU', {
              required: 'Ez a mező kötelező!',
            })}
            error={errors.answerHU?.message}
          />
        </AdminInput>
        <AdminInput
          labeFor="faq-question-en"
          label="Question"
          error={errors.questionEN?.message}
        >
          <FaqInput
            id="faq-question-en"
            placeholder="Is the wifi free?"
            register={register('questionEN', {
              required: 'Ez a mező kötelező!',
            })}
            error={errors.questionEN?.message}
          />
        </AdminInput>
        <AdminInput
          labeFor="faq-answer-en"
          label="Answer"
          error={errors.answerEN?.message}
        >
          <FaqInput
            id="faq-answer-en"
            placeholder="Yes, the wifi is free."
            register={register('answerEN', {
              required: 'Ez a mező kötelező!',
            })}
            error={errors.answerEN?.message}
          />
        </AdminInput>

        <div className=" space-x-3 justify-self-end">
          {!isCreate && (
            <Button
              title="Törlés"
              className="!bg-white px-4 py-1 !text-main-text hover:!bg-main-blue hover:!text-white"
              onClick={handleDelete}
            />
          )}
          <Button title="Mentés" className="px-4 py-1" type="submit" />
        </div>
      </form>
    )
  },
  (oldProps, newProps) => {
    return (
      oldProps.faq?._id === newProps.faq?._id &&
      oldProps.faq?.questionEN === newProps.faq?.questionEN &&
      oldProps.faq?.answerEN === newProps.faq?.answerEN &&
      oldProps.faq?.answerHU === newProps.faq?.answerHU &&
      oldProps.faq?.questionHU === newProps.faq?.questionHU &&
      oldProps.isCreate === newProps.isCreate
    )
  }
)

export default FaqForm
