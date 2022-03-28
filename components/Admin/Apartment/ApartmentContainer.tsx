import { FunctionComponent, memo, useCallback } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import {
  AdminApartmentDefinitions,
  DefaultAdminApartment,
} from '../../../services/apartmentDefinitions'
import { Button } from '../../Button'
import Assets from './Assets/Assets'
import Calendar from './Calendar'
import Datas from './Datas'
import Images from './Images/Images'

interface ApartmentContainerProps {
  isCreate?: boolean
  defaultValue?: AdminApartmentDefinitions
}

const ApartmentContainer: FunctionComponent<ApartmentContainerProps> = memo(
  function ApartmentContainer({
    isCreate = false,
    defaultValue = DefaultAdminApartment,
  }) {
    const { register, handleSubmit, formState } =
      useForm<AdminApartmentDefinitions>({
        defaultValues: { ...defaultValue },
      })

    const onSubmit = useCallback((data: AdminApartmentDefinitions) => {}, [])
    return (
      <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex w-full justify-end space-x-4">
          <Button
            title="Törlés"
            classNames="py-1 px-10 !bg-white !text-main-text hover:!bg-main-blue hover:!text-white"
          />
          <Button title="Mentés" classNames="py-1 px-10" type="submit" />
        </div>
        <div className="flex w-full space-x-6">
          <div className="w-[40%]">
            <Images />
            <div className="mt-5 flex space-x-3">
              <Assets isCreate={isCreate} />
              {!isCreate && <Calendar />}
            </div>
          </div>
          <Datas
            isCreate={isCreate}
            register={register}
            formState={formState}
          />
        </div>
      </form>
    )
  },
  (oldProps, newProps) => oldProps.isCreate === newProps.isCreate
)

export default ApartmentContainer
