import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FunctionComponent, memo, useCallback, useState } from 'react'
import AdminHomeApartment from '../../components/Admin/AdminHome/AdminHomeApartment'
import { Button } from '../../components/Button'
import { AdminHomeApartmentModel } from '../../services/apartmentDefinitions'
import { axiosInstance } from '../../services/axiosInstance'
import { validateExpire } from '../../services/userDefinitions'

interface AdminHomeProps {
  _apartments: AdminHomeApartmentModel[]
}

const index: FunctionComponent<AdminHomeProps> = memo(function Index({
  _apartments,
}) {
  const router = useRouter()

  const handleCreate = useCallback(() => {
    router.push('/admin/apartment')
  }, [router])

  const [apartmanets, setApartments] = useState(_apartments)

  return (
    <div className="mx-auto my-8 grid w-1/2 gap-y-6">
      <div className="!mb-7 flex w-full justify-between">
        <h1 className="text-2xl font-bold">Apartmanok</h1>
        <Button
          title="Létrehozás"
          className="py-1 px-4 "
          onClick={handleCreate}
        />
      </div>
      {apartmanets.map((e) => (
        <AdminHomeApartment
          key={e._id}
          address={`${e.address.zip_code} ${e.address.city} ${e.address.street} ${e.address.house_number}`}
          name={e.name}
          id={e._id}
        />
      ))}
    </div>
  )
})

export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session || session === undefined || validateExpire(session.expires)) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    }
  }

  const response = await axiosInstance.get('apartment/admin/home', {
    headers: { 'auth-token': session.token as string },
  })
  const apartments: AdminHomeApartmentModel = response.data

  return {
    props: { _apartments: apartments },
  }
}
