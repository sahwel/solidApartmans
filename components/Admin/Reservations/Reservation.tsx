import React, { FunctionComponent, memo, useCallback, useState } from 'react'
import { AdmiReservationModel } from '../../../services/reservationsDefinitions'
import { FormatDate } from '../../../services/ReservationServices'
import { Button } from '../../Button'

interface ReservationProps {
  reservation: AdmiReservationModel
}

const Reservation: FunctionComponent<ReservationProps> = memo(
  function Reservation({ reservation }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = useCallback(() => {
      setIsOpen((oldState) => !oldState)
    }, [])
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
              {FormatDate(reservation.arrive)} - {FormatDate(reservation.leave)}{' '}
            </p>
          </div>
        </div>

        {isOpen && (
          <div className="mt-3 flex w-full justify-between border-t-[1px] border-main-blue py-3">
            <div>
              <p>
                Lakcím:{' '}
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
              <p>Felnőttek: {reservation.customer.numberOfAdults}</p>
              <p>Gyerekek: {reservation.customer.numberOfKids}</p>
              <p>
                Két éven aluli:{' '}
                {reservation.customer.underTwoYear ? 'Van' : 'Nincs'}
              </p>
              <p>
                Etetőszék:{' '}
                {reservation.customer.highChair ? 'Szükséges' : 'Nem szükséges'}
              </p>
              <p>
                Babaágy:{' '}
                {reservation.customer.babyBed ? 'Szükséges' : 'Nem szükséges'}
              </p>
              {!reservation.customer.privatePerson && (
                <>
                  <p>Adószám: {reservation.customer.taxNumber}</p>
                  <p>Cégnév: {reservation.customer.companyName}</p>
                </>
              )}
              <p>Kifiztve: {reservation.payed ? 'Igen' : 'Nem'}</p>
              <p>
                Össeg:{' '}
                <span className="font-medium"> {reservation.total} Ft</span>
              </p>
            </div>
            <div className="grid items-end">
              <div className="flex space-x-5">
                <Button
                  title={reservation.payed ? 'Nincs kifizetve' : 'Kifizetve'}
                  className="!bg-white py-2 px-5 !text-main-text hover:!bg-main-blue hover:!text-white"
                />
                <Button title="Törlés" className="py-2 px-5" />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
)

export default Reservation
