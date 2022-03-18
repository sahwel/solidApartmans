import { GetServerSideProps } from 'next'
import React, { FunctionComponent, memo } from 'react'
import ApartmentCapacity from '../../../components/Apartment/ApartmentCapacity'
import ApartmentDatas from '../../../components/Apartment/ApartmentDatas'
import ApartmentDeatils from '../../../components/Apartment/ApartmentDeatils'
import ApartmentFacilities from '../../../components/Apartment/ApartmentFacilities'
import ApartmentImage from '../../../components/Apartment/ApartmentImage'
import ApartmentMap from '../../../components/Apartment/ApartmentMap'
import ApartmentReviews from '../../../components/Apartment/ApartmentReviews'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'
import { ExtendedApartmentDefinition } from '../../../services/apartmentDefinitions'

const index: FunctionComponent<ExtendedApartmentDefinition> = memo(
  function apartment({
    id,
    name,
    stars,
    address,
    facilities,
    capacity,
    image,
    price,
    details,
    images,
    reviews,
  }) {
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
              <Button title="Book" classNames="px-12 py-2 hidden lg:block " />
            </div>
            <ApartmentDeatils details={details} />
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
            <Button title="Book" classNames="px-16 py-2 " />
          </div>
          <ApartmentReviews reviews={reviews} />
        </div>
      </Container>
    )
  },
  (oldProps, newProps) =>
    oldProps.id === newProps.id &&
    oldProps.address === newProps.address &&
    oldProps.name === newProps.name &&
    oldProps.stars === newProps.stars &&
    oldProps.details === newProps.details &&
    oldProps.capacity.capacity === newProps.capacity.capacity &&
    oldProps.capacity.bedrooms === newProps.capacity.bedrooms &&
    oldProps.image === newProps.image &&
    oldProps.price === newProps.price &&
    (oldProps.facilities.length === newProps.facilities.length
      ? oldProps.facilities.every(
          (e, i) =>
            e.name === newProps.facilities[i].name &&
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
  const apartment: ExtendedApartmentDefinition = {
    id: '1',
    name: 'B apartment',
    stars: 4,
    address: '1061 Budapest, Kossuth utca 64/b ',
    facilities: [
      { name: 'wifi', url: '/wifi.svg' },
      { name: 'ac', url: '/ac.svg' },
      { name: 'baby bed', url: '/baby.svg' },
      { name: 'parking', url: '/parking.svg' },
      { name: 'wifi', url: '/wifi.svg' },
      { name: 'wifi', url: '/wifi.svg' },
      { name: 'ac', url: '/ac.svg' },
      { name: 'baby bed', url: '/baby.svg' },
      { name: 'parking', url: '/parking.svg' },
      { name: 'wifi', url: '/wifi.svg' },
      { name: 'wifi', url: '/wifi.svg' },
      { name: 'ac', url: '/ac.svg' },
      { name: 'baby bed', url: '/baby.svg' },
      { name: 'parking', url: '/parking.svg' },
      { name: 'wifi', url: '/wifi.svg' },
      { name: 'wifi', url: '/wifi.svg' },
      { name: 'ac', url: '/ac.svg' },
      { name: 'baby bed', url: '/baby.svg' },
      { name: 'parking', url: '/parking.svg' },
      { name: 'wifi', url: '/wifi.svg' },
    ],
    capacity: {
      capacity: 2,
      bedrooms: 1,
    },
    price: 13000,
    images: ['/static-apart.png', '/static-apart2.png'],
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
    mattis sem. Sed lacinia elit ut purus facilisis pellentesque. Quisque
    elit dolor, venenatis et felis non, imperdiet lacinia tellus. Cras
    cursus mattis erat, ac maximus sem. Mauris fringilla posuere aliquam.
    Aenean lectus lorem, porta pellentesque tincidunt non, efficitur ut est.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
    mattis sem. Sed lacinia elit ut purus facilisis pellentesque. Quisque
    elit dolor, venenatis et felis non, imperdiet lacinia tellus. Cras
    cursus mattis erat, ac maximus sem. Mauris fringilla posuere aliquam.
    Aenean lectus lorem, porta pellentesque tincidunt non, efficitur ut est.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
    mattis sem. Sed lacinia elit ut purus facilisis pellentesque. Quisque
    Aenean lectus lorem, porta pellentesque tincidunt non, efficitur ut est.
    elit dolor, venenatis et felis non, imperdiet lacinia tellus. Cras
    cursus mattis erat, ac maximus sem. Mauris fringilla posuere aliquam.
    Aenean lectus lorem, porta pellentesque tincidunt non, efficitur ut est.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
    mattis sem. Sed lacinia elit ut purus facilisis pellentesque. Quisque
    Aenean lectus lorem, porta pellentesque tincidunt non, efficitur ut est.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel elit
    dolor, venenatis et felis non, imperdiet lacinia tellus. Cras cursus
    mattis erat, ac maximus sem. Mauris fringilla posuere aliquam. Aenean
    lectus lorem, porta pellentesque tincidunt non, efficitur ut est. Lorem
    ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel mattis sem.
    Sed lacinia elit ut purus facilisis pellentesque. Quisque Aenean lectus
    lorem, porta pellentesque tincidunt non, efficitur ut est. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit. Nulla vel Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Nulla vel mattis sem. Sed lacinia
    elit ut purus facilisis pellentesque. Quisque elit dolor, venenatis et
    felis non, imperdiet lacinia tellus. Cras elit dolor, venenatis et felis
    non, imperdiet lacinia tellus. Cras cursus mattis erat, ac maximus sem.
    Mauris fringilla posuere aliquam. Aenean lectus lorem, porta
    pellentesque tincidunt non, efficitur ut est.`,
    reviews: [
      {
        customer: 'John Doe',
        review: 'asd',
        timeAgo: '2 days ago',
        stars: 5,
      },
      {
        customer: 'John Doe',
        review: 'asd',
        timeAgo: '2 days ago',
        stars: 3,
      },
    ],
    image: '/static-apart.png',
  }

  return {
    props: {
      ...apartment,
    },
  }
}
