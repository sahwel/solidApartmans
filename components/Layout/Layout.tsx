import React, { FunctionComponent } from 'react'
import { Navbar } from '../Navbar/Navbar'

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="min-h-screen font-montserrat text-main-text">
      <Navbar />
      {children}
    </div>
  )
}
