import { FunctionComponent, memo, useCallback } from 'react'
import ImageHome from './ImageHome'
import HomeData from './HomeData'
import HomeFacilites from './HomeFacilites'
import { useRouter } from 'next/router'
import HomeCapacity from './HomeCapacity'
import {
  ApartmentDefinitions,
  lookAddress,
} from '../../../services/apartmentDefinitions'
import { Button } from '../../Button'
import { useTranslation } from 'react-i18next'

export const ApartmentContainer: FunctionComponent<ApartmentDefinitions> = memo(
  function ApartmentContainer({
    _id,
    name,
    stars,
    address,
    facilities,
    capacity,
    image,
    price,
  }) {
    const router = useRouter()

    const open = useCallback(() => {
      router.push(`apartment/${_id}`)
    }, [_id, router])
    const handleOpenBook = useCallback(() => {
      router.push(`/book/${_id}`)
    }, [_id, router])

    const { t } = useTranslation('Home')
    return (
      <div className=" h-[23rem] w-full rounded-2xl bg-white text-main-text drop-shadow-md sm:m-auto sm:w-[80%] md:flex md:h-[20rem] md:w-full">
        <ImageHome stars={stars} image={image} />
        <div className="flex h-[40%] flex-col justify-between p-5 font-medium md:h-full md:w-[60%]">
          <div className="flex justify-between">
            <HomeData
              name={name}
              stars={stars}
              address={address}
              price={price}
            />
          </div>
          <div className=" hidden w-full justify-between md:grid md:grid-cols-3 lg:flex">
            <HomeFacilites facilities={facilities} />

            <HomeCapacity {...capacity} />
          </div>
          <div className=" mx-auto flex w-4/5 justify-between space-x-9">
            <Button
              title={t('book')}
              className="w-1/2 p-2 px-5"
              onClick={handleOpenBook}
            />
            <button className="w-1/2  p-2 px-5 underline" onClick={open}>
              {t('more')}
            </button>
          </div>
        </div>
      </div>
    )
  },
  (oldProps: ApartmentDefinitions, newProps: ApartmentDefinitions) =>
    oldProps._id === newProps._id &&
    lookAddress(oldProps.address, newProps.address) &&
    oldProps.name === newProps.name &&
    oldProps.stars === newProps.stars &&
    oldProps.capacity.capacity === newProps.capacity.capacity &&
    oldProps.capacity.bedrooms === newProps.capacity.bedrooms &&
    oldProps.image === newProps.image &&
    oldProps.price === newProps.price &&
    (oldProps.facilities.length === newProps.facilities.length
      ? oldProps.facilities.every(
          (e, i) =>
            e.nameHU === newProps.facilities[i].nameHU &&
            e.nameEN === newProps.facilities[i].nameEN &&
            e.url === newProps.facilities[i].url
        )
      : false)
)
