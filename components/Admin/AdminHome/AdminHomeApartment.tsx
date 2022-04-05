import { useRouter } from 'next/router'
import { FunctionComponent, memo, useCallback } from 'react'
import { Button } from '../../Button'

interface AdminHomeApartmentProps {
  name: string
  address: string
  id: string
}

const AdminHomeApartment: FunctionComponent<AdminHomeApartmentProps> = memo(
  function AdminHomeApartment({ name, address, id }) {
    const router = useRouter()
    const handleOpen = useCallback(() => {
      router.push(`/admin/apartment/${id}`)
    }, [id, router])

    return (
      <div className="flex items-center justify-between rounded-lg border-2 border-main-blue p-3 shadow-lg">
        <div>
          <p>{name}</p>
          <p>{address}</p>
        </div>
        <Button title="Megnyitás" classNames="px-4 py-1" onClick={handleOpen} />
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.address === newProps.address &&
    oldProps.name === newProps.name &&
    oldProps.id === newProps.id
)

export default AdminHomeApartment
