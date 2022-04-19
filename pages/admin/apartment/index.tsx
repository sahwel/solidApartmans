import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import React, { FunctionComponent, memo } from 'react'
import ApartmentContainer from '../../../components/Admin/Apartment/components/ApartmentContainer'
import { AdminFacility } from '../../../services/apartmentDefinitions'
import { axiosInstance } from '../../../services/axiosInstance'
import { validateExpire } from '../../../services/userDefinitions'

interface IndexProps {
  facilites: AdminFacility[]
}

const index: FunctionComponent<IndexProps> = memo(function Index({
  facilites,
}) {
  return <ApartmentContainer isCreate={true} facilites={facilites} />
})

export default index

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

  const response = await axiosInstance.get('/facility/', {
    headers: { 'auth-token': session.token as string },
  })

  return {
    props: { facilites: response.data },
  }
}
