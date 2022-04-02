import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import React, { memo } from 'react'
import { validateExpire } from '../../../services/userDefinitions'

const Apartment = memo(function Apartment() {
  return <div>apartment</div>
})

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

  return {
    props: { session },
  }
}
