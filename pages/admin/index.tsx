import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { memo, useCallback } from 'react'
import AdminHomeApartment from '../../components/Admin/AdminHome/AdminHomeApartment'
import { Button } from '../../components/Button'
import { validateExpire } from '../../services/userDefinitions'

const index = memo(function Index() {
  const router = useRouter()

  const handleCreate = useCallback(() => {
    router.push('/admin/apartment')
  }, [router])

  return (
    <div className="mx-auto my-8 grid w-1/2 gap-y-6">
      <div className="!mb-7 flex w-full justify-between">
        <h1 className="text-2xl font-bold">Apartmanok</h1>
        <Button
          title="Létrehozás"
          classNames="py-1 px-4 "
          onClick={handleCreate}
        />
      </div>
      <AdminHomeApartment
        address="1031 Budapest Ilyen olyan utca 43/A"
        name="B apartman"
        id="1"
      />
      <AdminHomeApartment
        address="1031 Budapest Ilyen olyan utca 43/A"
        name="B apartman"
        id="1"
      />
      <AdminHomeApartment
        address="1031 Budapest Ilyen olyan utca 43/A"
        name="B apartman"
        id="1"
      />
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

  return {
    props: {},
  }
}
