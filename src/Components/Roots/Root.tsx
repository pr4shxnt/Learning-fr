import React from 'react'
import Navbar from './RootSubComponents/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './RootSubComponents/Footer'

const Root: React.FC = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root