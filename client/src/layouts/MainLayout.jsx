import React from 'react'
import Sidebar from '../components/sidebar/sidebar'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
       <Sidebar />
      <div className="content">
        <Header  />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
