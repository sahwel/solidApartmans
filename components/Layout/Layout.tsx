import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import AdminNavbar from '../Admin/Navbar/AdminNavbar'
import { Navbar } from '../Client/Navbar/Navbar'

const dontShowNavbar = '/admin/login'
const showAdmin = '/admin'

export const Layout: FunctionComponent = ({ children }) => {
  const router = useRouter()

  return (
    <div className="min-h-screen font-montserrat text-main-text placeholder:text-main-text">
      {router.pathname.toString() !== dontShowNavbar &&
        router.pathname.startsWith(showAdmin) && <AdminNavbar />}
      {!router.pathname.startsWith(showAdmin) && <Navbar />}
      {children}
    </div>
  )
}
