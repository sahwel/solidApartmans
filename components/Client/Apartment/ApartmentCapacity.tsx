import { UserIcon } from '@heroicons/react/outline'
import { FunctionComponent, memo } from 'react'
import { useTranslation } from 'react-i18next'
import CustomImage from '../../Image/CustomImage'

interface ApartmentCapacityProps {
  capacity: number
  bedrooms: number
}

const ApartmentCapacity: FunctionComponent<ApartmentCapacityProps> = memo(
  function ApartmentCapacity({ capacity, bedrooms }) {
    const { t } = useTranslation('Apartment')
    return (
      <div className="flex justify-evenly bg-white p-3  lg:h-[5rem] lg:w-full">
        <div className="grid">
          <p className="text-lg">{t('capacity')}</p>
          <div className="m-auto mt-4 flex">
            <span>{capacity}</span>
            <UserIcon className="h-6 w-6" />
          </div>
        </div>
        <div className="grid">
          <p className="text-lg">{t('bedrooms')}</p>
          <div className="m-auto mt-4 flex">
            <span>{bedrooms}</span>
            <CustomImage
              url="bed.svg"
              alt="image of a bed"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.bedrooms === newProps.bedrooms &&
    oldProps.capacity === newProps.capacity
)

export default ApartmentCapacity
