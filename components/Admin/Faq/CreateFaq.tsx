import React, { memo } from 'react'
import { Button } from '../../Button'
import AdminInput from '../../Common/AdminInput'

const CreateFaq = memo(function CreateFaq()  {
  return (
    <div className="w-[35vw] p-3">
      <form className=" grid space-y-3 py-3">
        <AdminInput labeFor="faq-question-hu" label="Kérdés">
          <input
            id="faq-question-hu"
            type="text"
            placeholder="Van wifi?"
            className="rounded-lg border-2 border-main-blue py-1 px-3"
          />
        </AdminInput>
        <AdminInput labeFor="faq-answer-hu" label="Válasz">
          <input
            id="faq-answer-hu"
            type="text"
            placeholder="Igen, van ingyenes wifi."
            className="rounded-lg border-2 border-main-blue py-1 px-3"
          />
        </AdminInput>
        <AdminInput labeFor="faq-question-en" label="Question">
          <input
            id="faq-question-en"
            type="text"
            placeholder="Is the wifi free?"
            className="rounded-lg border-2 border-main-blue py-1 px-3"
          />
        </AdminInput>
        <AdminInput labeFor="faq-answer-en" label="Answer">
          <input
            id="faq-answer-en"
            type="text"
            placeholder="Yes, the wifi is free."
            className="rounded-lg border-2 border-main-blue py-1 px-3"
          />
        </AdminInput>
        <Button title="Mentés" classNames="px-4 py-1 justify-self-center" />
      </form>
    </div>
  )
})

export default CreateFaq
