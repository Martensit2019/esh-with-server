import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/sidebar'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const MainLayout1 = () => {
  return (
    <div className="wrapper">
       <Sidebar />
      <div className="content">
        <Header  />
        <Outlet/>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout1
