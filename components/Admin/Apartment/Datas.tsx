import React, { FunctionComponent, memo } from 'react'
import AdminInput from '../../Common/AdminInput'
import ApartmentDescription from './ApartmentDescription'
import ApartmentStatistics from './ApartmentStatistics'

interface DatasProps {
  isCreate: boolean
}

const Datas: FunctionComponent<DatasProps> = memo(
  function Datas({ isCreate }) {
    return (
      <div className="w-[60%] space-y-3 !pt-0">
        <AdminInput labeFor="apartment-edit-create-name" label="Apartman neve">
          <input
            id="apartment-edit-create-name"
            type="text"
            placeholder="B apartman"
            className="rounded-lg border-2 border-main-blue py-1 px-3"
          />
        </AdminInput>
        <div className="flex space-x-4">
          <AdminInput
            labeFor="apartment-edit-create-zip"
            label="Írányítószám"
            classNames="w-[25%]"
          >
            <input
              id="apartment-edit-create-zip"
              type="text"
              placeholder="1031"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
          <AdminInput
            labeFor="apartment-edit-create-city"
            label="Város"
            classNames="w-[75%]"
          >
            <input
              id="apartment-edit-create-city"
              type="text"
              placeholder="Budapest"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
        </div>
        <div className="flex space-x-4">
          <AdminInput
            labeFor="apartment-edit-create-street"
            label="Utca"
            classNames="w-[75%]"
          >
            <input
              id="apartment-edit-create-street"
              type="text"
              placeholder="Petőfi Sándor utca"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
          <AdminInput
            labeFor="apartment-edit-create-house"
            label="Házszám"
            classNames="w-[25%]"
          >
            <input
              id="apartment-edit-create-house"
              type="text"
              placeholder="64/A"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
        </div>
        <div className="flex space-x-4">
          <AdminInput
            labeFor="apartment-edit-create-plus-price"
            label="Plusz ár/fő"
          >
            <input
              id="apartment-edit-create-plus-price"
              type="text"
              placeholder="1500 Ft"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
          <AdminInput
            labeFor="apartment-edit-create-price"
            label="Ár 1 fő/éjszaka"
          >
            <input
              id="apartment-edit-create-price"
              type="text"
              placeholder="13000 Ft"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
        </div>
        <div className="flex space-x-4">
          <AdminInput
            labeFor="apartment-edit-create-capacity"
            label="Férőhelyek száma"
          >
            <input
              id="apartment-edit-create-price"
              type="text"
              placeholder="4"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
          <AdminInput
            labeFor="apartment-edit-create-bedroom"
            label="Szobák száma"
          >
            <input
              id="apartment-edit-create-bedroom"
              type="text"
              placeholder="2"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
        </div>
        <ApartmentDescription isCreate={isCreate} />
        {!isCreate && <ApartmentStatistics />}
      </div>
    )
  },
  (oldProps, newProps) => oldProps.isCreate === newProps.isCreate
)

export default Datas
