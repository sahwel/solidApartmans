import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const ApartmentMap = memo(function ApartmentMap() {
  const { t } = useTranslation('Apartment')
  return (
    <div className="bg-white p-3 lg:h-full lg:bg-transparent lg:py-0">
      <h1 className="text-lg font-bold lg:hidden">{t('whereToFind')}</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156617.7725294722!2d19.098302601846363!3d47.45981928276652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741e82f5dd6ef59%3A0x336e4ece13cfb31a!2sSolid%20Apartmans!5e0!3m2!1shu!2shu!4v1647257108035!5m2!1shu!2shu"
        loading="lazy"
        className="m-3 mx-auto  h-[25rem]  w-[95%] rounded-2xl lg:h-[80%] lg:w-full"
      ></iframe>
    </div>
  )
})

export default ApartmentMap
