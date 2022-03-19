import type { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
import { ApartmanContainer } from '../components/HomeApartmans'
import { ApartmentDefinitions } from '../services/apartmentDefinitions'

interface HomeProps {
  _apartments: ApartmentDefinitions[]
}

const Home: NextPage<HomeProps> = ({ _apartments }) => {
  const [apartments, setApartments] =
    useState<ApartmentDefinitions[]>(_apartments)

  return (
    <div className="m-auto mt-8 mb-9 w-[90%] space-y-8 rounded-3xl drop-shadow-xl md:bg-main-gray md:p-7 lg:w-[80%] 2xl:w-[70%]">
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
      image: '/static-apart.png',
    },
    {
      id: '2',
      name: 'B apartment',
      stars: 4,
      address: '1061 Budapest, Kossuth utca 64/b ',
      facilities: [
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
      image: '/static-apart.png',
    },
    {
      id: '2',
      name: 'B apartment',
      stars: 4,
      address: '1061 Budapest, Kossuth utca 64/b ',
      facilities: [
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
      image: '/static-apart.png',
    },
  ]
  return {
    props: {
      _apartments,
    },
  }
}
