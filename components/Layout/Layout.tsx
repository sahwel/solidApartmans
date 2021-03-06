import { useRouter } from 'next/router'
import React, { FunctionComponent, memo } from 'react'
import AdminNavbar from '../Admin/Navbar/AdminNavbar'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('../Client/Navbar/Navbar'), {
  ssr: false,
})

const dontShowNavbar = '/admin/login'
const showAdmin = '/admin'

export const Layout: FunctionComponent = memo(
  function Layout({ children }) {
    const router = useRouter()

    return (
      <div className="min-h-screen font-montserrat text-main-text placeholder:text-main-text">
        {router.pathname.toString() !== dontShowNavbar &&
          router.pathname.startsWith(showAdmin) && <AdminNavbar />}
        {!router.pathname.startsWith(showAdmin) && <Navbar />}
        {children}
      </div>
    )
  },
  (oldProps, newProps) => oldProps.children === newProps.children
)
