import { getSession } from 'next-auth/react'
import {
  Dispatch,
  FunctionComponent,
  memo,
  SetStateAction,
  useCallback,
} from 'react'
import { axiosInstance } from '../../../services/axiosInstance'
import { Button } from '../../Button'
import { useToast } from '../../Common/Toast/Toast'

interface ReservationPayedModalProps {
  name: string
  date: string
  isPayed: boolean
  id: string
  hide: () => void
  setPayed: Dispatch<SetStateAction<boolean>>
}

const ReservationPayedModal: FunctionComponent<ReservationPayedModalProps> =
  memo(
    function ApartmentDeleteModal({ name, date, hide, id, isPayed, setPayed }) {
      const toast = useToast()
      const handleSave = useCallback(async () => {
        try {
          const session = await getSession()
          const response = await axiosInstance.patch(
            `reservation/${id}`,
            {},
            {
              headers: { 'auth-token': session?.token as string },
            }
          )
          setPayed((oldState) => !oldState)
          toast.success(response.data.msgHU)
          hide()
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
      }, [hide, id, setPayed, toast])
      return (
        <div className="grid h-[140px] justify-center space-y-2">
          <div className="place-self-end">
            Biztosan át szeretnéd állítani {name}({date}) foglalását
            {isPayed ? ' nincs kifizetvére' : ' kifizetvére'}?
          </div>
          <div className="flex justify-center space-x-3 self-start">
            <Button
              onClick={hide}
              title="Mégse"
              className="!bg-white py-1 px-2 !text-main-text hover:!bg-main-blue hover:!text-white"
            />
            <Button title="Mentés" className="py-1 px-2" onClick={handleSave} />
          </div>
        </div>
      )
    },
    (oldProps, newProps) =>
      oldProps.name === newProps.name &&
      oldProps.date === newProps.date &&
      oldProps.isPayed === newProps.isPayed &&
      oldProps.id === newProps.id &&
      oldProps.setPayed === newProps.setPayed &&
      oldProps.hide === newProps.hide
  )

export default ReservationPayedModal
