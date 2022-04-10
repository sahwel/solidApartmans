import { memo, useCallback, useState } from 'react'
import CustomImage from '../../Image/CustomImage'
import cl from 'classnames'
import { useTranslation } from 'react-i18next'

const ContactUsForm = memo(function ContactUsForm() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = useCallback((e) => {
    e.preventDefault()
    setIsClicked(true)
  }, [])

  const handleMouseLeft = useCallback(() => {
    setIsClicked(false)
  }, [])

  const { t } = useTranslation('Contact')
  return (
    <div className="bottom-0 grid w-full justify-items-center bg-white p-6">
      <p className="text-center">{t('form.header')}</p>
      <form className="mt-10 grid w-full justify-items-center space-y-5">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full rounded-sm border-[1px] border-main-blue py-2 px-4 pr-12"
            placeholder={t('form.email')}
          />
          <div className="absolute top-1/2 right-3 -translate-y-1/2 transform">
            <CustomImage
              url="mailOutline.svg"
              alt="icon of mail"
              className="h-6 w-6"
            />
          </div>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            className="w-full rounded-sm border-[1px] border-main-blue py-2 px-4 pr-12"
            placeholder={t('form.subject')}
          />
          <div className="absolute top-1/2 right-3 -translate-y-1/2 transform">
            <CustomImage url="pen.svg" alt="icon of mail" className="h-5 w-5" />
          </div>
        </div>
        <textarea
          className="h-24 w-full resize-y rounded-sm border-[1px] border-main-blue py-2 px-4"
          placeholder={t('form.message')}
        ></textarea>
        <button
          onClick={handleClick}
          onMouseLeave={handleMouseLeft}
          className="group relative flex  w-1/2 cursor-pointer items-center  justify-center space-x-2 overflow-hidden rounded-xl border-2 border-main-blue bg-main-blue py-2 px-4 font-bold text-white duration-300 hover:bg-white hover:text-main-text lg:w-1/4"
        >
          <p>{t('form.send')}</p>
          <CustomImage
            url="send.svg"
            alt="icon of mail"
            imageClassName="!text-white"
            className="h-4  w-4 group-hover:hidden"
          />
          <CustomImage
            url="sendHover.svg"
            alt="icon of mail"
            imageClassName="!text-white"
            className={cl(
              'right-0 hidden h-4 w-4 transition-all duration-[600ms] ease-in-out group-hover:block',
              isClicked && '-right-full'
            )}
          />
        </button>
      </form>
    </div>
  )
})

export default ContactUsForm
