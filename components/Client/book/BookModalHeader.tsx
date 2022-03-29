import { FunctionComponent, memo } from 'react'
import { Address } from '../../../services/apartmentDefinitions'

interface BookModalHeaderProps {
  address: Address
  name: string
}
const BookModalHeader: FunctionComponent<BookModalHeaderProps> = memo(
  function BookModalHeader({ address, name }) {
    return (
      <div>
        <h1 className="text-xl font-medium ">
          {' '}
          {address.zip_code +
            ', ' +
            address.city +
            ' ' +
            address.street +
            ' ' +
            address.house_number}
        </h1>
        <p className="text-lg font-medium ">{name}</p>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.address === newProps.address && oldProps.name === newProps.name
)
export default BookModalHeader
