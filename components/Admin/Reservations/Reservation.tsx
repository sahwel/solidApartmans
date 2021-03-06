import React, { FunctionComponent, memo, useCallback, useState } from 'react'
import { AdmiReservationModel } from '../../../services/reservationsDefinitions'
import { FormatDate } from '../../../services/ReservationServices'
import { Button } from '../../Button'
import { useModal } from '../../Modal/ModalProvider'
import ReservationPayedModal from './ReservationPayedModal'
import { lookReservation, ReservationProps } from './services/definitions'

const Reservation: FunctionComponent<ReservationProps> = memo(
  function Reservation({ reservation }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = useCallback(() => {
      setIsOpen((oldState) => !oldState)
    }, [])

    const [payed, setPayed] = useState(reservation.payed)

    const modal = useModal()
    const handleSetPayed = useCallback(() => {
      modal.show(
        <ReservationPayedModal
          setPayed={setPayed}
          hide={modal.hide}
          name={
            reservation.customer.lastName + ' ' + reservation.customer.firstName
          }
          isPayed={payed}
          date={
            FormatDate(reservation.arrive) + '-' + FormatDate(reservation.leave)
          }
          id={reservation._id}
        />
      )
    }, [
      modal,
      reservation.customer.lastName,
      reservation.customer.firstName,
      reservation.arrive,
      reservation.leave,
      reservation._id,
      payed,
    ])
    return (
      <div className="mx-auto  w-[90%]  rounded-lg border-2 border-main-blue p-3 hover:shadow-lg">
        <div
          className="flex cursor-pointer items-center  justify-between"
          onClick={handleOpen}
        >
          <h1>
            <span className="mr-2 text-lg font-medium">
              {reservation.customer.lastName +
                ' ' +
                reservation.customer.firstName}
            </span>
            <span className="text-sm">
              ({reservation.customer.email}, {reservation.customer.phone})
            </span>
          </h1>
          <div className="flex items-center space-x-5">
            <p className="text-sm">{reservation.apartment.name}</p>
            <p>
              {FormatDate(reservation.arrive)} - {FormatDate(reservation.leave)}
            </p>
          </div>
        </div>

        {isOpen && (
          <div className="mt-3 flex w-full justify-between border-t-[1px] border-main-blue py-3">
            <div>
              <p>
                Lakc??m:{' '}
                {reservation.customer.address.country +
                  ', ' +
                  reservation.customer.address.zip_code +
                  ' ' +
                  reservation.customer.address.city +
                  ' ' +
                  reservation.customer.address.street +
                  ' ' +
                  reservation.customer.address.house_number +
                  ' ' +
                  reservation.customer.address.other}
              </p>
              <p>Feln??ttek: {reservation.customer.numberOfAdults}</p>
              <p>Gyerekek: {reservation.customer.numberOfKids}</p>
              <p>
                K??t ??ven aluli:{' '}
                {reservation.customer.underTwoYear ? 'Van' : 'Nincs'}
              </p>
              <p>
                Etet??sz??k:{' '}
                {reservation.customer.highChair ? 'Sz??ks??ges' : 'Nem sz??ks??ges'}
              </p>
              <p>
                Baba??gy:{' '}
                {reservation.customer.babyBed ? 'Sz??ks??ges' : 'Nem sz??ks??ges'}
              </p>
              {!reservation.customer.privatePerson && (
                <>
                  <p>Ad??sz??m: {reservation.customer.taxNumber}</p>
                  <p>C??gn??v: {reservation.customer.companyName}</p>
                </>
              )}
              <p>Kifiztve: {payed ? 'Igen' : 'Nem'}</p>
              <p>Fizet??s t??pusa: {reservation.method}</p>
              <p>
                ??sseg:{' '}
                <span className="font-medium"> {reservation.total} Ft</span>
              </p>
            </div>
            <div className="grid items-end">
              <div className="flex space-x-5">
                {reservation.method === 'bank transfer' && (
                  <Button
                    onClick={handleSetPayed}
                    title={payed ? 'Nincs kifizetve' : 'Kifizetve'}
                    className="!bg-white py-2 px-5 !text-main-text hover:!bg-main-blue hover:!text-white"
                  />
                )}
                <Button title="T??rl??s" className="py-2 px-5" />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  },
  (oldProps, newProps) =>
    lookReservation(oldProps.reservation, newProps.reservation)
)

export default Reservation
