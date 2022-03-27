import React from 'react'
import AdminHomeApartment from '../../components/Admin/AdminHome/AdminHomeApartment'
import { Button } from '../../components/Button'

const index = () => {
  return (
    <div className="mx-auto my-8 grid w-1/2 gap-y-6">
      <div className="!mb-7 flex w-full justify-between">
        <h1 className="text-2xl font-bold">Apartmanok</h1>
        <Button title="Létrehozás" classNames="py-1 px-4 " />
      </div>
      <AdminHomeApartment
        address="1031 Budapest Ilyen olyan utca 43/A"
        name="B apartman"
        id="1"
      />
      <AdminHomeApartment
        address="1031 Budapest Ilyen olyan utca 43/A"
        name="B apartman"
        id="1"
      />
      <AdminHomeApartment
        address="1031 Budapest Ilyen olyan utca 43/A"
        name="B apartman"
        id="1"
      />
    </div>
  )
}

export default index
