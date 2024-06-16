import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
  return (
    <>
    <Navbar/> 
<Outlet/>  
{/*outlet shows the content of homepage*/}
<ToastContainer/>
    </>
  )
}

export default MainLayout