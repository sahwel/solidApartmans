import { GetServerSideProps } from 'next'
import { FunctionComponent, memo, useCallback, useState } from 'react'
import BookForm from '../../../components/book/BookForm'
import BookHeader from '../../../components/book/BookHeader'
import Container from '../../../components/Container'
import { ExtendedApartmentDefinition } from '../../../services/apartmentDefinitions'

const index: FunctionComponent<ExtendedApartmentDefinition> = memo(
  function Book({
    id,
    name,
    stars,
    address,
    facilities,
    capacity,
    price,
    details,
    images,
    reviews,
  }) {
    const [isCompany, setIsComapny] = useState(false)
    const handleTypeChange = useCallback((newState: boolean) => {
      return () => setIsComapny(newState)
    }, [])
    return (
      <Container classNames="!bg-white">
        <BookHeader
          name={name}
          address={address}
          isCompany={isCompany}
          setIsCompany={handleTypeChange}
        />
        <BookForm isCompany={isCompany} />
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
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        efficitur leo tortor, ac sollicitudin arcu vestibulum et. Ut faucibus,
        tellus non ultrices rhoncus, dolor sit amet, consectetur adipiscing
        elit. nteger efficitur leo tortor, ac sollicitudin arcu vestibulum et.
        Ut faucibus, tellus non ultrices rhoncus, dolor sit amet, consectetur
        adipiscing elit.`,
        timeAgo: '2 days ago',
        stars: 5,
      },
      {
        customer: 'John Doe',
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        efficitur leo tortor, ac sollicitudin arcu vestibulum et. Ut faucibus,
        tellus non ultrices rhoncus, dolor sit amet, consectetur adipiscing
        elit. nteger efficitur leo tortor, ac sollicitudin arcu vestibulum et.
        Ut faucibus, tellus non ultrices rhoncus, dolor sit amet, consectetur
        adipiscing elit.`,
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
