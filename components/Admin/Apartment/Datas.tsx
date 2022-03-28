import React, { FunctionComponent, memo } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'
import { AdminApartmentDefinitions } from '../../../services/apartmentDefinitions'
import AdminInput from '../../Common/AdminInput'
import ApartmentDescription from './ApartmentDescription'
import ApartmentStatistics from './ApartmentStatistics'

interface DatasProps {
  isCreate: boolean
  formState: FormState<AdminApartmentDefinitions>
  register: UseFormRegister<AdminApartmentDefinitions>
}

const Datas: FunctionComponent<DatasProps> = memo(
  function Datas({ isCreate, register, formState }) {
    const { errors } = formState
    return (
      <div className="w-[60%] space-y-3 !pt-0">
        <AdminInput
          labeFor="apartment-edit-create-name"
          label="Apartman neve"
          error={errors.name?.message}
        >
          <input
            {...register('name', { required: 'Ez a mező kötelező!' })}
            id="apartment-edit-create-name"
            type="text"
            placeholder="B apartman"
            className="rounded-lg border-2 border-main-blue py-1 px-3"
          />
        </AdminInput>
        <div className="flex space-x-4">
          <AdminInput
            error={errors.address?.zip_code?.message}
            labeFor="apartment-edit-create-zip"
            label="Írányítószám"
            classNames="w-[25%]"
          >
            <input
              {...register('address.zip_code', {
                required: 'Ez a mező kötelező!',
              })}
              id="apartment-edit-create-zip"
              type="text"
              placeholder="1031"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
          <AdminInput
            error={errors.address?.city?.message}
            labeFor="apartment-edit-create-city"
            label="Város"
            classNames="w-[75%]"
          >
            <input
              {...register('address.city', {
                required: 'Ez a mező kötelező!',
              })}
              id="apartment-edit-create-city"
              type="text"
              placeholder="Budapest"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
        </div>
        <div className="flex space-x-4">
          <AdminInput
            error={errors.address?.street?.message}
            labeFor="apartment-edit-create-street"
            label="Utca"
            classNames="w-[75%]"
          >
            <input
              {...register('address.street', {
                required: 'Ez a mező kötelező!',
              })}
              id="apartment-edit-create-street"
              type="text"
              placeholder="Petőfi Sándor utca"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
          <AdminInput
            error={errors.address?.house_number?.message}
            labeFor="apartment-edit-create-house"
            label="Házszám"
            classNames="w-[25%]"
          >
            <input
              {...register('address.house_number', {
                required: 'Ez a mező kötelező!',
              })}
              id="apartment-edit-create-house"
              type="text"
              placeholder="64/A"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
        </div>
        <div className="flex space-x-4">
          <AdminInput
            error={errors.plusPrice?.message}
            labeFor="apartment-edit-create-plus-price"
            label="Plusz ár/fő"
          >
            <input
              {...register('plusPrice', {
                required: 'Ez a mező kötelező!',
              })}
              id="apartment-edit-create-plus-price"
              type="text"
              placeholder="1500 Ft"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
          <AdminInput
            error={errors.price?.message}
            labeFor="apartment-edit-create-price"
            label="Ár 1 fő/éjszaka"
          >
            <input
              {...register('price', {
                required: 'Ez a mező kötelező!',
              })}
              id="apartment-edit-create-price"
              type="text"
              placeholder="13000 Ft"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
        </div>
        <div className="flex space-x-4">
          <AdminInput
            error={errors.capacity?.capacity?.message}
            labeFor="apartment-edit-create-capacity"
            label="Férőhelyek száma"
          >
            <input
              {...register('capacity.capacity', {
                required: 'Ez a mező kötelező!',
              })}
              id="apartment-edit-create-capacity"
              type="text"
              placeholder="4"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
          <AdminInput
            error={errors.capacity?.bedrooms?.message}
            labeFor="apartment-edit-create-bedroom"
            label="Szobák száma"
          >
            <input
              {...register('capacity.bedrooms', {
                required: 'Ez a mező kötelező!',
              })}
              id="apartment-edit-create-bedroom"
              type="text"
              placeholder="2"
              className="rounded-lg border-2 border-main-blue py-1 px-3"
            />
          </AdminInput>
        </div>
        <ApartmentDescription
          isCreate={isCreate}
          register={register}
          errorHU={errors.detailsHU?.message}
          errorEN={errors.detailsEN?.message}
        />
        {!isCreate && <ApartmentStatistics />}
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.isCreate === newProps.isCreate &&
    oldProps.register === newProps.register &&
    oldProps.formState === newProps.formState
)

export default Datas
