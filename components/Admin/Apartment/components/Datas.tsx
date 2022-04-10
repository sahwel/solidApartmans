import React, { FunctionComponent, memo } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'
import { AdminApartmentDefinitions } from '../../../../services/apartmentDefinitions'
import AdminInput from '../../../Common/AdminInput'
import ApartmentDescription from './ApartmentDescription'
import ApartmentInput from './ApartmentInput'
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
          <ApartmentInput
            register={register('name', {
              required: 'Ez a mező kötelező!',
            })}
            id="apartment-edit-create-name"
            placeholder="B apartman"
            error={errors.name?.message}
          />
        </AdminInput>
        <div className="flex space-x-4">
          <AdminInput
            error={errors.address?.zip_code?.message}
            labeFor="apartment-edit-create-zip"
            label="Írányítószám"
            className="!w-auto"
          >
            <ApartmentInput
              register={register('address.zip_code', {
                required: 'Ez a mező kötelező!',
              })}
              id="apartment-edit-create-zip"
              placeholder="1031"
              error={errors.address?.zip_code?.message}
            />
          </AdminInput>
          <AdminInput
            error={errors.address?.city?.message}
            labeFor="apartment-edit-create-city"
            label="Város"
            className="!w-3/4"
          >
            <ApartmentInput
              register={register('address.city', {
                required: 'Ez a mező kötelező!',
              })}
              id="apartment-edit-create-city"
              placeholder="1031"
              error={errors.address?.city?.message}
            />
          </AdminInput>
        </div>
        <div className="flex space-x-4">
          <AdminInput
            error={errors.address?.street?.message}
            labeFor="apartment-edit-create-street"
            label="Utca"
            className="!w-3/4"
          >
            <ApartmentInput
              register={register('address.street', {
                required: 'Ez a mező kötelező!',
              })}
              id="apartment-edit-create-street"
              placeholder="Petőfi Sándor utca"
              error={errors.address?.city?.message}
            />
          </AdminInput>
          <AdminInput
            error={errors.address?.house_number?.message}
            labeFor="apartment-edit-create-house"
            label="Házszám"
            className="!w-auto"
          >
            <ApartmentInput
              register={register('address.house_number', {
                required: 'Ez a mező kötelező!',
              })}
              id="apartment-edit-create-house"
              placeholder="64/A"
              error={errors.address?.house_number?.message}
            />
          </AdminInput>
        </div>
        <div className="flex space-x-4">
          <AdminInput
            error={errors.plusPrice?.message}
            labeFor="apartment-edit-create-plus-price"
            label="Plusz ár/fő"
          >
            <ApartmentInput
              register={register('plusPrice', {
                required: 'Ennek a mezőnek az értéke legalább 1 kell legyen.',
                min: {
                  value: 1,
                  message: 'Ennek a mezőnek az értéke legalább 1 kell legyen.',
                },
              })}
              id="apartment-edit-create-plus-price"
              type="number"
              placeholder="1500 Ft"
              error={errors.plusPrice?.message}
            />
          </AdminInput>
          <AdminInput
            error={errors.price?.message}
            labeFor="apartment-edit-create-price"
            label="Ár 1 fő/éjszaka"
          >
            <ApartmentInput
              register={register('price', {
                required: 'Ennek a mezőnek az értéke legalább 1 kell legyen.',
                min: {
                  value: 1,
                  message: 'Ennek a mezőnek az értéke legalább 1 kell legyen.',
                },
              })}
              id="apartment-edit-create-price"
              type="number"
              placeholder="13000 Ft"
              error={errors.price?.message}
            />
          </AdminInput>
        </div>
        <div className="flex space-x-4">
          <AdminInput
            error={errors.capacity?.capacity?.message}
            labeFor="apartment-edit-create-capacity"
            label="Férőhelyek száma"
          >
            <ApartmentInput
              register={register('capacity.capacity', {
                required: 'Ennek a mezőnek az értéke legalább 1 kell legyen.',
                min: {
                  value: 1,
                  message: 'Ennek a mezőnek az értéke legalább 1 kell legyen.',
                },
              })}
              id="apartment-edit-create-capacity"
              type="number"
              placeholder="4"
              error={errors.capacity?.capacity?.message}
            />
          </AdminInput>
          <AdminInput
            error={errors.capacity?.bedrooms?.message}
            labeFor="apartment-edit-create-bedroom"
            label="Szobák száma"
          >
            <ApartmentInput
              register={register('capacity.bedrooms', {
                required: 'Ennek a mezőnek az értéke legalább 1 kell legyen.',
                min: {
                  value: 1,
                  message: 'Ennek a mezőnek az értéke legalább 1 kell legyen.',
                },
              })}
              id="apartment-edit-create-bedroom"
              type="number"
              placeholder="2"
              error={errors.capacity?.bedrooms?.message}
            />
          </AdminInput>
        </div>
        <ApartmentDescription
          isCreate={isCreate}
          register={register}
          errorHU={errors.detailsHU?.message}
          errorEN={errors.detailsEN?.message}
        />
        {!isCreate && <ApartmentStatistics views={0} reservations={0} />}
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.isCreate === newProps.isCreate &&
    oldProps.register === newProps.register &&
    oldProps.formState === newProps.formState
)

export default Datas
