import { GetServerSideProps } from 'next'
import { FunctionComponent, memo, useCallback, useState } from 'react'
import BookForm from '../../../components/Client/book/BookForm'
import BookHeader from '../../../components/Client/book/BookHeader'
import Container from '../../../components/Container'
import {
  Address,
  ExtendedApartmentDefinition,
} from '../../../services/apartmentDefinitions'
import { axiosInstance } from '../../../services/axiosInstance'

interface BookProps {
  id: string
  name: string
  address: Address
}

const index: FunctionComponent<BookProps> = memo(
  function Book({ id, name, address }) {
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
        <BookForm isCompany={isCompany} address={address} name={name} />
      </Container>
    )
  },
  (oldProps, newProps) =>
    oldProps.id === newProps.id &&
    oldProps.address === newProps.address &&
    oldProps.name === newProps.name
)

export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id

  const response = await axiosInstance.get(`apartment/book/datas/${id}`)

  return {
    props: {
      ...response.data,
    },
  }
}
