import { GetServerSideProps } from 'next'
import { FunctionComponent, memo, useCallback, useState } from 'react'
import Container from '../../../components/Container'
import {
  Address,
  Capacity,
  lookAddress,
} from '../../../services/apartmentDefinitions'
import { axiosInstance } from '../../../services/axiosInstance'

import dynamic from 'next/dynamic'

const BookHeader = dynamic(
  () => import('../../../components/Client/book/BookHeader'),
  {
    ssr: false,
  }
)

const BookForm = dynamic(
  () => import('../../../components/Client/book/BookForm'),
  {
    ssr: false,
  }
)

interface BookProps {
  id: string
  name: string
  address: Address
  capacity: Capacity
  notFreeTimes: Date[]
}

const index: FunctionComponent<BookProps> = memo(
  function Book({ name, address, notFreeTimes, capacity }) {
    const [isCompany, setIsComapny] = useState(false)
    const handleTypeChange = useCallback((newState: boolean) => {
      return () => setIsComapny(newState)
    }, [])
    return (
      <Container className="!bg-white">
        <BookHeader
          name={name}
          address={address}
          isCompany={isCompany}
          setIsCompany={handleTypeChange}
        />
        <BookForm
          capacity={capacity.capacity}
          isCompany={isCompany}
          address={address}
          name={name}
          notFreeTimes={notFreeTimes}
        />
      </Container>
    )
  },
  (oldProps, newProps) =>
    oldProps.id === newProps.id &&
    lookAddress(oldProps.address, newProps.address) &&
    oldProps.capacity === newProps.capacity &&
    oldProps.name === newProps.name
)

export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id

  const response = await axiosInstance.get(`apartment/book/datas/${id}`)

  const notFreeTimes = await axiosInstance.get(`reservation/${id}`)

  return {
    props: {
      ...response.data,
      notFreeTimes: notFreeTimes.data.result.map((e: Date) =>
        new Date(e).toLocaleDateString()
      ),
    },
  }
}
