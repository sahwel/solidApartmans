import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import React, { FunctionComponent, memo } from 'react'
import ApartmentContainer from '../../../components/Admin/Apartment/components/ApartmentContainer'
import { AdminApartmentDefinitions } from '../../../services/apartmentDefinitions'
import { axiosInstance } from '../../../services/axiosInstance'
import { validateExpire } from '../../../services/userDefinitions'

interface ApartmentProps {
  apartment: AdminApartmentDefinitions
}

const Apartment: FunctionComponent<ApartmentProps> = memo(
  function Apartment({ apartment }) {
    return <ApartmentContainer isCreate={false} defaultValue={apartment} />
  },
  (oldProps, newProps) =>
    oldProps.apartment._id === newProps.apartment._id &&
    oldProps.apartment.address.city === newProps.apartment.address.city &&
    oldProps.apartment.address.zip_code ===
      newProps.apartment.address.zip_code &&
    oldProps.apartment.address.house_number ===
      newProps.apartment.address.house_number &&
    oldProps.apartment.address.street === newProps.apartment.address.street &&
    oldProps.apartment.name === newProps.apartment.name &&
    oldProps.apartment.capacity.capacity ===
      newProps.apartment.capacity.capacity &&
    oldProps.apartment.capacity.bedrooms ===
      newProps.apartment.capacity.bedrooms &&
    oldProps.apartment.price === newProps.apartment.price &&
    (oldProps.apartment.facilities.length ===
    newProps.apartment.facilities.length
      ? oldProps.apartment.facilities.every(
          (e, i) =>
            e.nameHU === newProps.apartment.facilities[i].nameHU &&
            e.nameEN === newProps.apartment.facilities[i].nameEN &&
            e.url === newProps.apartment.facilities[i].url
        )
      : false) &&
    (oldProps.apartment.images.length === newProps.apartment.images.length
      ? oldProps.apartment.images.every(
          (e, i) => e === newProps.apartment.images[i]
        )
      : false)
)

export default Apartment
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session || validateExpire(session.expires)) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    }
  }

  const id = context.params?.id
  const response = await axiosInstance.get(`/apartment/admin/${id}`, {
    headers: {
      'auth-token': session.token as string,
    },
  })

  let apartment: AdminApartmentDefinitions = response.data

  apartment.facilities = apartment.facilities.map((e) => ({
    ...e,
    selected: true,
  }))

  return {
    props: { apartment },
  }
}
