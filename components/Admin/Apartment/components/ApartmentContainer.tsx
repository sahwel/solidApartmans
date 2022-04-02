import { FunctionComponent, memo } from 'react'
import {
  AdminApartmentDefinitions,
  DefaultAdminApartment,
} from '../../../../services/apartmentDefinitions'
import { Button } from '../../../Button'
import Assets from './Assets/Assets'
import Calendar from './Calendar'
import Datas from './Datas'
import Images from './Images/Images'
import { useImages } from '../services/useImages'
import { useApartmentContainer } from '../services/useApartmentContainer'

interface ApartmentContainerProps {
  isCreate?: boolean
  defaultValue?: AdminApartmentDefinitions
}

const ApartmentContainer: FunctionComponent<ApartmentContainerProps> = memo(
  function ApartmentContainer({
    isCreate = false,
    defaultValue = DefaultAdminApartment,
  }) {
    const { register, handleSubmit, onSubmit, formState, setValue, setError } =
      useApartmentContainer(defaultValue)
    const { handleAddImg, moveImg, images, handleDeleteImg } = useImages(
      setValue,
      setError
    )
    const { errors } = formState
    return (
      <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="hidden"
          {...register('image', { required: 'true', min: 1 })}
        />
        <div className="mb-4 flex w-full justify-end space-x-4">
          <Button
            title="Törlés"
            classNames="py-1 px-10 !bg-white !text-main-text hover:!bg-main-blue hover:!text-white"
          />
          <Button title="Mentés" classNames="py-1 px-10" type="submit" />
        </div>
        <div className="flex w-full space-x-6">
          <div className="w-[40%]">
            <Images
              error={errors.image?.message ? true : false}
              images={images}
              moveImg={moveImg}
              handleDeleteImg={handleDeleteImg}
              handleAddImg={handleAddImg}
            />
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