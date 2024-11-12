import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { RouterProvider } from '@/context/context'
import AppointPopup from './appoint-popup'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <div className="min-h-[60vh]">
          {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout