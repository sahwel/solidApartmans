import React, { FunctionComponent, memo } from 'react'
import ApartmentCapacity from '../../../components/Apartment/ApartmentCapacity'
import ApartmentDatas from '../../../components/Apartment/ApartmentDatas'
import ApartmentDeatils from '../../../components/Apartment/ApartmentDeatils'
import ApartmentFacilities from '../../../components/Apartment/ApartmentFacilities'
import ApartmentImage from '../../../components/Apartment/ApartmentImage'
import ApartmentMap from '../../../components/Apartment/ApartmentMap'
import ApartmentReviews from '../../../components/Apartment/ApartmentReviews'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'
import { ApartmentDefinitions } from '../../../services/apartmentDefinitions'

interface ApartmentProps {
  apartment: ApartmentDefinitions
}

const index: FunctionComponent<ApartmentProps> = memo(
  function apartment({ apartment }) {
    return (
      <Container>
        <div className=" space-y-5 lg:flex lg:h-[25rem] lg:justify-between">
          <ApartmentImage />
          <div className="items-start justify-between space-y-5 lg:!mt-0 lg:h-full  lg:w-1/2 lg:space-y-0">
            <div className="flex items-start lg:h-[25%] xl:h-[20%]">
              <ApartmentDatas />
              <Button title="Book" classNames="px-12 py-2 hidden lg:block " />
            </div>
            <ApartmentDeatils />
          </div>
        </div>
        <div className="space-y-5 lg:flex lg:h-[28rem]">
          <div className="space-y-5 lg:flex lg:w-2/3  lg:flex-row-reverse lg:space-y-0">
            <ApartmentFacilities />
            <div className="space-y-5  lg:w-1/2 lg:space-y-0">
              <ApartmentCapacity />
              <ApartmentMap />
            </div>
          </div>
          <div className="col-start-12 col-end-13 row-end-2 flex justify-center lg:hidden">
            <Button title="Book" classNames="px-16 py-2 " />
          </div>
          <ApartmentReviews />
        </div>
      </Container>
    )
  },
  (oldProps: ApartmentProps, newProps: ApartmentProps) => {
    return (
      oldProps.apartment.address === newProps.apartment.address &&
      oldProps.apartment.name === newProps.apartment.name &&
      oldProps.apartment.stars === newProps.apartment.stars
    )
  }
)

export default index
