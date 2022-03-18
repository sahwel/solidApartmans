import type { GetServerSideProps, NextPage } from 'next'
import { memo, useCallback, useEffect, useState } from 'react'
import { ApartmanContainer } from '../components/HomeApartmans'
import { ApartmentDefinitions } from '../services/apartmentDefinitions'

interface HomeProps {
  _apartments: ApartmentDefinitions[]
}

const Home: NextPage<HomeProps> = ({ _apartments }) => {
  const [apartments, setApartments] =
    useState<ApartmentDefinitions[]>(_apartments)

  return (
    <div className="m-auto mt-8 mb-9 w-[90%] space-y-8 rounded-3xl drop-shadow-xl md:bg-main-gray md:p-7">
      {apartments.map((e, i) => (
        <ApartmanContainer {...e} key={i} />
      ))}
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const _apartments: ApartmentDefinitions[] = [
    {
      id: '1',
      name: 'B apartment',
      stars: 4,
      address: '1061 Budapest, Kossuth utca 64/b ',
      facilities: [
        '/wifi.svg',
        '/ac.svg',
        '/baby.svg',
        '/parking.svg',
        '/wifi.svg',
      ],
      capacity: {
        capacity: 2,
        bedrooms: 1,
      },
      price: 13000,
      image: '/static-apart.png',
    },
    {
      id: '2',
      name: 'B apartment',
      stars: 4,
      address: '1061 Budapest, Kossuth utca 64/b ',
      facilities: [
        '/wifi.svg',
        '/ac.svg',
        '/baby.svg',
        '/parking.svg',
        '/wifi.svg',
      ],
      capacity: {
        capacity: 2,
        bedrooms: 1,
      },
      price: 13000,
      image: '/static-apart.png',
    },
    {
      id: '2',
      name: 'B apartment',
      stars: 4,
      address: '1061 Budapest, Kossuth utca 64/b ',
      facilities: [
        '/wifi.svg',
        '/ac.svg',
        '/baby.svg',
        '/parking.svg',
        '/wifi.svg',
      ],
      capacity: {
        capacity: 2,
        bedrooms: 1,
      },
      price: 13000,
      image: '/static-apart.png',
    },
  ]
  return {
    props: {
      _apartments,
    },
  }
}
