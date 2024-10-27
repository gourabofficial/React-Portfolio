import React from 'react'
import Navbar from '../Components/Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const RootLayout = () => {
  return (
    
    <>
      <Navbar />
      <Outlet />
      
    </>
  )
}

export default RootLayout