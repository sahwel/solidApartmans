import Link from 'next/link'
import { memo } from 'react'

const AdminNavbar = memo(function AdminNavbar() {
  return (
    <div className="flex justify-end bg-main-text text-white">
      <ul className="flex space-x-5 p-5 text-lg">
        <Link href={'/admin'} passHref>
          <li className="cursor-pointer">Apartmanok</li>
        </Link>
        <Link href={'/admin/reservations'} passHref>
          <li className="cursor-pointer">Foglalások</li>
        </Link>
        <Link href={'/admin/reviews'} passHref>
          <li className="cursor-pointer">Értékelések</li>
        </Link>
        <Link href={'/admin/faq'} passHref>
          <li className="cursor-pointer">GY.I.K</li>
        </Link>
      </ul>
    </div>
  )
})

export default AdminNavbar
