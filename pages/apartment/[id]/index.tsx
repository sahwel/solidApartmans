import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { FunctionComponent, memo, useCallback } from 'react'
import ApartmentCapacity from '../../../components/Client/Apartment/ApartmentCapacity'
import ApartmentDatas from '../../../components/Client/Apartment/ApartmentDatas'
import ApartmentDeatils from '../../../components/Client/Apartment/ApartmentDeatils'
import ApartmentFacilities from '../../../components/Client/Apartment/ApartmentFacilities'
import ApartmentImage from '../../../components/Client/Apartment/ApartmentImage'
import ApartmentMap from '../../../components/Client/Apartment/ApartmentMap'
import ApartmentReviews from '../../../components/Client/Apartment/ApartmentReviews'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'
import { ExtendedApartmentDefinition } from '../../../services/apartmentDefinitions'
import { axiosInstance } from '../../../services/axiosInstance'
import { useTranslation } from 'react-i18next'

const index: FunctionComponent<ExtendedApartmentDefinition> = memo(
  function Apartment({
    _id,
    name,
    stars,
    address,
    facilities,
    capacity,
    price,
    detailsHU,
    detailsEN,
    images,
    reviews,
  }) {
    const router = useRouter()
    const handleOpenBook = useCallback(() => {
      router.push(`/book/${_id}`)
    }, [_id, router])
    const { t } = useTranslation('Apartment')
    return (
      <Container>
        <div className=" space-y-5 lg:flex lg:h-[25rem] lg:justify-between">
          <ApartmentImage images={images} />
          <div className="items-start justify-between space-y-5 lg:!mt-0 lg:h-full  lg:w-1/2 lg:space-y-0">
            <div className="flex items-start lg:h-[25%] xl:h-[20%]">
              <ApartmentDatas
                price={price}
                name={name}
                address={address}
                stars={stars}
              />
              <Button
                title={t('book')}
                className="hidden px-12 py-2 lg:block "
                onClick={handleOpenBook}
              />
            </div>
            <ApartmentDeatils details={detailsHU} />
          </div>
        </div>
        <div className="space-y-5 lg:flex lg:h-[28rem]">
          <div className="space-y-5 lg:flex lg:w-2/3  lg:flex-row-reverse lg:space-y-0">
            <ApartmentFacilities facilities={facilities} />
            <div className="space-y-5  lg:w-1/2 lg:space-y-0">
              <ApartmentCapacity {...capacity} />
              <ApartmentMap />
            </div>
          </div>
          <div className="col-start-12 col-end-13 row-end-2 flex justify-center lg:hidden">
            <Button
              title={t('book')}
              className="px-16 py-2 "
              onClick={handleOpenBook}
            />
          </div>
          <ApartmentReviews reviews={reviews} />
        </div>
      </Container>
    )
  },
  (oldProps, newProps) =>
    oldProps._id === newProps._id &&
    oldProps.address === newProps.address &&
    oldProps.name === newProps.name &&
    oldProps.stars === newProps.stars &&
    oldProps.detailsHU === newProps.detailsHU &&
    oldProps.detailsEN === newProps.detailsEN &&
    oldProps.capacity.capacity === newProps.capacity.capacity &&
    oldProps.capacity.bedrooms === newProps.capacity.bedrooms &&
    oldProps.price === newProps.price &&
    (oldProps.facilities.length === newProps.facilities.length
      ? oldProps.facilities.every(
          (e, i) =>
            e.nameHU === newProps.facilities[i].nameHU &&
            e.nameEN === newProps.facilities[i].nameEN &&
            e.url === newProps.facilities[i].url
        )
      : false) &&
    (oldProps.images.length === newProps.images.length
      ? oldProps.images.every((e, i) => e === newProps.images[i])
      : false) &&
    (oldProps.reviews.length === newProps.reviews.length
      ? oldProps.reviews.every(
          (e, i) =>
            e.customer === newProps.reviews[i].customer &&
            e.review === newProps.reviews[i].review &&
            e.stars === newProps.reviews[i].stars &&
            e.timeAgo === newProps.reviews[i].timeAgo
        )
      : false)
)

export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id
  const response = await axiosInstance.get(`apartment/${id}`)
  const apartment: ExtendedApartmentDefinition = response.data

  return {
    props: {
      ...apartment,
    },
  }
}
