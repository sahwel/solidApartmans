import { FunctionComponent, memo } from 'react'

interface BookModalHeaderProps {
  address: string
  name: string
}
const BookModalHeader: FunctionComponent<BookModalHeaderProps> = memo(
  function BookModalHeader({ address, name }) {
    return (
      <div>
        <h1 className="text-xl font-medium ">{address}</h1>
        <p className="text-lg font-medium ">{name}</p>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.address === newProps.address && oldProps.name === newProps.name
)
export default BookModalHeader
