import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const ContactHeader = memo(function ContactHeader() {
  const { t } = useTranslation('Contact')
  return (
    <div className="relative flex w-full items-center justify-center text-center text-white md:py-5 md:text-main-text lg:!mb-10 lg:py-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/scndBg.svg"
        alt="background"
        className="absolute top-0 w-full md:hidden"
      />
      <div className=" flex h-[10rem] w-full flex-col items-center justify-center sm:h-[14rem] lg:h-fit">
        <h1 className="relative z-40 w-full py-5 text-center text-2xl font-bold md:pt-0 lg:py-3">
          {t('header')}
        </h1>
        <p className="relative z-20 px-14 text-[90%]">{t('headerText')}</p>
      </div>
    </div>
  )
})

export default ContactHeader
