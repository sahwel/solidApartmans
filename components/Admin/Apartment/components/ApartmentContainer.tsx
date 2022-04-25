import { FunctionComponent, memo, useCallback, useState } from 'react'
import {
  AdminApartmentDefinitions,
  AdminFacility,
  DefaultAdminApartment,
} from '../../../../services/apartmentDefinitions'
import { Button } from '../../../Button'
import Assets from './Assets/Assets'
import Calendar from './Calendar'
import Datas from './Datas'
import Images from './Images/Images'
import { useImages } from '../services/useImages'
import { useApartmentContainer } from '../services/useApartmentContainer'
import { useModal } from '../../../Modal/ModalProvider'
import AparmentDeleteModal from './ApartmentDeleteModal'
import ApartmentDeleteModal from './ApartmentDeleteModal'

interface ApartmentContainerProps {
  isCreate?: boolean
  defaultValue?: AdminApartmentDefinitions
  facilites?: AdminFacility[]
}

const ApartmentContainer: FunctionComponent<ApartmentContainerProps> = memo(
  function ApartmentContainer({
    isCreate = false,
    defaultValue = DefaultAdminApartment,
    facilites = [],
  }) {
    const [facilities, setFacilities] = useState<AdminFacility[]>(
      isCreate ? facilites : defaultValue.facilities
    )
    const [images, setImages] = useState<string[]>(
      defaultValue.images ? defaultValue.images : []
    )

    const [imagesHidden, setImagesHidden] = useState<File[]>()

    const {
      register,
      handleSubmit,
      onSubmit,
      formState,
      setValue,
      setError,
      getValues,
    } = useApartmentContainer(defaultValue, facilities, imagesHidden, isCreate)

    const { handleAddImg, moveImg, handleDeleteImg } = useImages(
      setValue,
      setError,
      setImages,
      setImagesHidden
    )
    const { errors } = formState

    const handleFacilitiesChange = useCallback((_id: string) => {
      setFacilities((oldFacilities) =>
        oldFacilities.map((e) => {
          return e._id === _id ? { ...e, selected: !e.selected } : e
        })
      )
    }, [])

    const modal = useModal()
    const openModal = useCallback(() => {
      const name = getValues('name')
      modal.show(
        <ApartmentDeleteModal
          name={name}
          id={defaultValue._id}
          hide={modal.hide}
        />
      )
    }, [defaultValue._id, getValues, modal])
    return (
      <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register('image', { required: 'true' })} />
        <div className="mb-4 flex w-full justify-end space-x-4">
          <Button
            title="Naptár"
            className="!bg-white py-1 px-10 !text-main-text hover:!bg-main-blue hover:!text-white"
            onClick={() => {
              console.log(getValues('image'))
            }}
          />
          <Button
            onClick={openModal}
            title="Törlés"
            className="!bg-white py-1 px-10 !text-main-text hover:!bg-main-blue hover:!text-white"
          />
          <Button title="Mentés" className="py-1 px-10" type="submit" />
        </div>
        <div className="flex w-full space-x-6">
          <div className="w-[40%]">
            <Images
              isCreate={isCreate}
              error={errors.image?.message ? true : false}
              images={images}
              moveImg={moveImg}
              handleDeleteImg={handleDeleteImg}
              handleAddImg={handleAddImg}
            />
            <div className="mt-5 flex space-x-3">
              <Assets
                facilities={facilities}
                handleFacilitiesChange={handleFacilitiesChange}
              />
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
  (oldProps, newProps) =>
    oldProps.isCreate === newProps.isCreate &&
    (newProps.defaultValue && oldProps.defaultValue
      ? oldProps.defaultValue._id === newProps.defaultValue._id &&
        oldProps.defaultValue.address.city ===
          newProps.defaultValue.address.city &&
        oldProps.defaultValue.address.zip_code ===
          newProps.defaultValue.address.zip_code &&
        oldProps.defaultValue.address.house_number ===
          newProps.defaultValue.address.house_number &&
        oldProps.defaultValue.address.street ===
          newProps.defaultValue.address.street &&
        oldProps.defaultValue.name === newProps.defaultValue.name &&
        oldProps.defaultValue.capacity.capacity ===
          newProps.defaultValue.capacity.capacity &&
        oldProps.defaultValue.capacity.bedrooms ===
          newProps.defaultValue.capacity.bedrooms &&
        oldProps.defaultValue.price === newProps.defaultValue.price &&
        (oldProps.defaultValue.reviews.length ===
        newProps.defaultValue.reviews.length
          ? oldProps.defaultValue.reviews.every(
              (e, i) =>
                e.customer === newProps.defaultValue?.reviews[i].customer &&
                e.review === newProps.defaultValue.reviews[i].review &&
                e.stars === newProps.defaultValue.reviews[i].stars &&
                e.timeAgo === newProps.defaultValue.reviews[i].timeAgo
            )
          : false) &&
        (oldProps.defaultValue.facilities.length ===
        newProps.defaultValue.facilities.length
          ? oldProps.defaultValue.facilities.every(
              (e, i) =>
                e.nameHU === newProps.defaultValue?.facilities[i].nameHU &&
                e.nameEN === newProps.defaultValue.facilities[i].nameEN &&
                e.url === newProps.defaultValue.facilities[i].url
            )
          : false) &&
        (oldProps.defaultValue.images.length ===
        newProps.defaultValue.images.length
          ? oldProps.defaultValue.images.every(
              (e, i) => e === newProps.defaultValue?.images[i]
            )
          : false)
      : false)
)

export default ApartmentContainer
