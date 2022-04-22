import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FunctionComponent, memo, useCallback } from 'react'
import { axiosInstance } from '../../../../services/axiosInstance'
import { Button } from '../../../Button'
import { useToast } from '../../../Common/Toast/Toast'

interface ApartmentDeleteModalProps {
  name: string
  id: string
  hide: () => void
}

const ApartmentDeleteModal: FunctionComponent<ApartmentDeleteModalProps> = memo(
  function ApartmentDeleteModal({ name, hide, id }) {
    const toast = useToast()
    const router = useRouter()
    const handleDelete = useCallback(async () => {
      try {
        const session = await getSession()
        await axiosInstance.delete(`apartment/${id}`, {
          headers: { 'auth-token': session?.token as string },
        })
        hide()
        router.push('/admin')
      } catch (error: any) {
        toast.error(
          error.response
            ? error.response.data
              ? error.response.data.msgHU
                ? error.response.data.msgHU
                : error.response.data.msg
              : 'Egy hiba lépett fel a kérés közben!'
            : error
        )
      }
    }, [hide, id, router, toast])
    return (
      <div className="grid h-[140px] justify-center space-y-2">
        <div className="place-self-end">
          Biztos törölni szeretnéd a(z) {name}-t?
        </div>
        <div className="flex justify-center space-x-3 self-start">
          <Button
            onClick={hide}
            title="Mégse"
            className="!bg-white py-1 px-2 !text-main-text hover:!bg-main-blue hover:!text-white"
          />
          <Button title="Törlés" className="py-1 px-2" onClick={handleDelete} />
        </div>
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.name === newProps.name &&
    oldProps.id === newProps.id &&
    oldProps.hide === newProps.hide
)

export default ApartmentDeleteModal
