import { GetServerSideProps } from 'next'
import { FunctionComponent, memo, useCallback, useState } from 'react'
import BookForm from '../../../components/Client/book/BookForm'
import BookHeader from '../../../components/Client/book/BookHeader'
import Container from '../../../components/Container'
import {
  Address,
  ExtendedApartmentDefinition,
} from '../../../services/apartmentDefinitions'

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
      <Container classNames="!bg-white">
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
  const data: BookProps = {
    id: '1',
    name: 'asd',
    address: {
      city: 'asd',
      house_number: 'asd',
      street: 'asd',
      zip_code: 'asd',
    },
  }
  return {
    props: {
      ...data,
    },
  }
}
