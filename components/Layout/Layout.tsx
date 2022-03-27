import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import { Navbar } from '../Navbar/Navbar'

const dontShowNavbar = '/admin/login'

export const Layout: FunctionComponent = ({ children }) => {
  const router = useRouter()

  return (
    <div className="min-h-screen font-montserrat text-main-text placeholder:text-main-text">
      {router.pathname.toString() !== dontShowNavbar && <Navbar />}
      {children}
    </div>
  )
}
