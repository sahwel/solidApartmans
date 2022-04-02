import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import React, { memo } from 'react'
import ApartmentContainer from '../../../components/Admin/Apartment/components/ApartmentContainer'
import { validateExpire } from '../../../services/userDefinitions'

const index = memo(function Index() {
  return <ApartmentContainer isCreate={true} />
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

  return {
    props: { session },
  }
}
