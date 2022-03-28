import React, { memo } from 'react'
import AdminInput from '../../Common/AdminInput'

const Datas = memo(function Datas() {
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
      <div>
        <label htmlFor="apartment-edit-create-description-hu">Lerírás</label>

        <textarea
          id="apartment-edit-create-description-hu"
          className="h-[20rem] w-full resize-none rounded-lg border-2 border-main-blue p-3"
          placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusandae Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusand consectetur magnam ratione odit vel explicabo. Assumenda dignissimos ex possimus odio rem perferendis odit, libero officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusandae consectetur magnam ratione odit vel explicabo. Assumenda dignissimos ex possimus odio rem perferendis odit, libero officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos blanditiis ullam cupiditate eius recusandae consectetur magnam ratione odit vel explicabo. Assumenda dignissimos ex possimus odio rem perferendis odit, libero officia."
        ></textarea>
      </div>
      <div className="flex w-full text-lg font-medium">
        <div className="gird w-full justify-center border-r-2 border-main-blue py-3">
          <p className="border-b-2 border-main-blue px-3 text-center">
            Megtekintések száma
          </p>
          <p className="flex w-full items-center justify-center p-3">423</p>
        </div>
        <div className="gird w-full justify-center py-3 text-center">
          <p className="border-b-2 border-main-blue px-3">Foglások száma</p>
          <p className="flex w-full items-center justify-center p-3">45</p>
        </div>
      </div>
    </div>
  )
})

export default Datas
