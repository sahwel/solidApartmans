import React, { memo, useCallback, useState } from 'react'
import { Button } from '../../Button'

const Reservation = memo(function Reservation() {
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
          <span className="mr-2 text-lg font-medium">John doe</span>
          <span className="text-sm">(john.doe@gmail.com, +36701234567)</span>
        </h1>
        <div className="flex items-center space-x-5">
          <p className="text-sm">B apartman</p>
          <p>2022.11.02 - 2022-11-16</p>
        </div>
      </div>

      {isOpen && (
        <div className="mt-3 flex w-full justify-between border-t-[1px] border-main-blue py-3">
          <div>
            <p>Lakcím: Lakcím: 4042, Debrecen Piac utca 44/B</p>
            <p>Felnőttek: 2</p>
            <p>Gyerekek: 1</p>
            <p>Két éven aluli: van</p>
            <p>Etetőszék: nem szükséges</p>
            <p>Babaágy: szükséges</p>
            <p>Adószám: 123456789123456789</p>
            <p>Cégnév: M{'&'}K development</p>
            <p>Kifiztve: Igen</p>
            <p>
              Össeg: <span className="font-medium">1400000 Ft</span>
            </p>
          </div>
          <div className="grid items-end">
            <div className="flex space-x-5">
              <Button
                title="Kifizetve"
                className="py-2 px-5 !bg-white !text-main-text hover:!bg-main-blue hover:!text-white"
              />
              <Button title="Törlés" className="py-2 px-5" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
})

export default Reservation
