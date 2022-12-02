import React from 'react'
import { Routes, Route, Navigate, useRoutes } from 'react-router-dom'
import Catalog from './pages/catalog'
import Baby from './pages/dlya-malyshey'
import Product from './pages/product'
import Main from './pages/main'
import Boys from './pages/dlya-malchikov'
import Girls from './pages/dlya-devochek'
import Mens from './pages/dlya-vzroslyh'
import MainLayout from './layouts/MainLayout'
import AdminIndex from './pages/admin'
import AdminLayout from './layouts/AdminLayout'

import routes from './routes'

function App() {
  const elements = useRoutes(routes)
  
  return elements

  // return (
  //   <>
  //     <Routes>
  //       <Route
  //         path="/"
  //         element={
  //           <MainLayout>
  //             <Main />
  //           </MainLayout>
  //         }
  //       />
  //       <Route
  //         path="/catalog"
  //         element={
  //           <MainLayout>
  //             <Catalog />
  //           </MainLayout>
  //         }
  //       />
  //       <Route
  //         path="/admin"
  //         element={
  //           <AdminLayout>
  //             <AdminIndex />
  //           </AdminLayout>
  //         }
  //       />
  //       <Route path="/dlya-malyshey" element={<Baby />} />
  //       <Route path="/dlya-malchikov" element={<Boys />} />
  //       <Route path="/dlya-devochek" element={<Girls />} />
  //       <Route path="/dlya-vzroslyh" element={<Mens />} />
  //       <Route path="/product" element={<Product />} />
  //       {/* <Route path="/" exact element={<Main/>} /> */}
  //       {/* <Redirect to="/" /> */}

  //       <Route path="*" element={<Navigate to="/dlya-vzroslyh" />} />
  //     </Routes>
  //   </>
  // )
}

export default App
