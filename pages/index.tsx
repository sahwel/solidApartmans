import type { NextPage } from 'next'
import { ApartmanContainer } from '../components/HomeApartmans'
import { ApartmentDefinitions } from '../services/apartmentDefinitions'

const static_apartments: ApartmentDefinitions[] = [
  {
    id: '1',
    name: 'B apartment',
    stars: 4,
    address: '1061 Budapest, Kossuth utca 64/b ',
  },
  {
    id: '2',
    name: 'B apartment',
    stars: 4,
    address: '1061 Budapest, Kossuth utca 64/b ',
  },
  {
    id: '2',
    name: 'B apartment',
    stars: 4,
    address: '1061 Budapest, Kossuth utca 64/b ',
  },
]

const Home: NextPage = () => {
  return (
    <div className="m-auto mt-8 mb-9 w-[90%] space-y-8 rounded-3xl drop-shadow-xl md:bg-main-gray md:p-7">
      {static_apartments.map((e, i) => (
        <ApartmanContainer {...e} key={i} />
      ))}
    </div>
  )
}

export default Home
