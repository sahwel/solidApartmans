import { ChevronDownIcon } from '@heroicons/react/solid'
import { memo, useCallback, useState } from 'react'
import cl from 'classnames'
import AdminInput from '../../Common/AdminInput'
import { Button } from '../../Button'

const FaqCard = memo(function FaqCard() {
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
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
            quibusdam?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
            quibusdam?
          </p>
        </div>
      ) : (
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
          <div className=" space-x-3 justify-self-end">
            <Button
              title="Törlés"
              classNames="px-4 py-1 !bg-white !text-main-text hover:!bg-main-blue hover:!text-white"
            />
            <Button title="Mentés" classNames="px-4 py-1" />
          </div>
        </form>
      )}
    </div>
  )
})

export default FaqCard
