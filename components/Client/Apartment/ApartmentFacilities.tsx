import { FunctionComponent, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Facility } from '../../../services/apartmentDefinitions'
import CustomImage from '../../Image/CustomImage'

interface ApartmentFacilitiesProps {
  facilities: Facility[]
}

const ApartmentFacilities: FunctionComponent<ApartmentFacilitiesProps> = memo(
  function ApartmentFacilities({ facilities }) {
    const { t, i18n } = useTranslation('Apartment')
    return (
      <div className="bg-white p-3  lg:w-1/2">
        <h1 className="text-lg font-bold lg:hidden">{t('facilities')}</h1>
        <div className="m-auto mt-4 flex max-w-[90vw] space-x-8 overflow-x-auto lg:grid lg:max-h-full lg:justify-start lg:space-x-0 lg:space-y-4 lg:overflow-y-auto lg:overflow-x-hidden">
          {facilities.map((e) => (
            <div
              className="grid w-[6rem] justify-center justify-items-center lg:flex lg:w-full lg:items-center lg:justify-start lg:space-x-3"
              key={e.url}
            >
              <CustomImage
                url={e.url}
                isFromApi={true}
                alt={`icon: ${i18n.language === 'hu' ? e.nameHU : e.nameEN}`}
                className="h-7 w-8"
              />
              <p className="mt-2  text-center lg:m-0">
                {i18n.language === 'hu' ? e.nameHU : e.nameEN}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.facilities.length === newProps.facilities.length
      ? oldProps.facilities.every(
          (e, i) =>
            e.nameHU === newProps.facilities[i].nameHU &&
            e.nameEN === newProps.facilities[i].nameEN &&
            e.url === newProps.facilities[i].url
        )
      : false
)

export default ApartmentFacilities
