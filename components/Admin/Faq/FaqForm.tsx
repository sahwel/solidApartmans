import React, { FunctionComponent, memo } from 'react'
import { AdminFaq } from '../../../services/faqDefinitions'
import AdminInput from '../../Common/AdminInput'
import FaqInput from './FaqInput'
import { Button } from '../../Button'
import { useFaqForm } from './useFaqForm'

interface FaqFormProps {
  isCreate: boolean
  faq?: AdminFaq
  // eslint-disable-next-line no-unused-vars
  addFaq?: (faq: AdminFaq) => Promise<void>
  // eslint-disable-next-line no-unused-vars
  deleteFaq?: (_id: string) => void
}

const FaqForm: FunctionComponent<FaqFormProps> = memo(function FaqForm({
  faq,
  isCreate,
  // eslint-disable-next-line no-unused-vars
  addFaq = async (faq: AdminFaq) => {},
  // eslint-disable-next-line no-unused-vars
  deleteFaq = (_id: string) => ({}),
}) {
  const { handleDelete, onSubmit, handleSubmit, register, formState } =
    useFaqForm(isCreate, addFaq, deleteFaq, faq)

  const { errors } = formState
  return (
    <form className=" grid space-y-3 py-3" onSubmit={handleSubmit(onSubmit)}>
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
        error={errors.questionEN?.message}
      >
        <FaqInput
          id="faq-answer-hu"
          placeholder="Igen, van ingyenes wifi."
          register={register('questionEN', {
            required: 'Ez a mező kötelező!',
          })}
          error={errors.questionEN?.message}
        />
      </AdminInput>
      <AdminInput
        labeFor="faq-question-en"
        label="Question"
        error={errors.answerHU?.message}
      >
        <FaqInput
          id="faq-question-en"
          placeholder="Is the wifi free?"
          register={register('answerHU', {
            required: 'Ez a mező kötelező!',
          })}
          error={errors.answerHU?.message}
        />
      </AdminInput>
      <AdminInput
        labeFor="faq-answer-en"
        label="Answer"
        error={errors.answerHU?.message}
      >
        <FaqInput
          id="faq-answer-en"
          placeholder="Yes, the wifi is free."
          register={register('answerEN', {
            required: 'Ez a mező kötelező!',
          })}
          error={errors.answerHU?.message}
        />
      </AdminInput>

      <div className=" space-x-3 justify-self-end">
        {!isCreate && (
          <Button
            title="Törlés"
            classNames="px-4 py-1 !bg-white !text-main-text hover:!bg-main-blue hover:!text-white"
            onClick={handleDelete}
          />
        )}
        <Button title="Mentés" classNames="px-4 py-1" type="submit" />
      </div>
    </form>
  )
})

export default FaqForm
