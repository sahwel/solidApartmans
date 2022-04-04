import type { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
import { ApartmanContainer } from '../components/Client/HomeApartmans'
import { ApartmentDefinitions } from '../services/apartmentDefinitions'
import { axiosInstance } from '../services/axiosInstance'

interface HomeProps {
  _apartments: ApartmentDefinitions[]
}

const Home: NextPage<HomeProps> = ({ _apartments }) => {
  const [apartments] = useState<ApartmentDefinitions[]>(_apartments)

  return (
    <div className="m-auto mt-8 mb-9 w-[90%] space-y-8 rounded-3xl drop-shadow-xl md:bg-main-gray md:p-7 lg:w-[80%] 2xl:w-[70%]">
      {apartments.map((e, i) => (
        <ApartmanContainer {...e} key={i} />
      ))}
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axiosInstance.get('/apartment')
  const _apartments: ApartmentDefinitions[] = response.data
  return {
    props: {
      _apartments,
    },
  }
}
