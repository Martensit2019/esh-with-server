import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/adminSidebar'
const AdminLayout = () => {
  return (
    <div className="admin">
      <div className="admin__wrapper">
        <AdminSidebar />
        <div className="admin__content">
        <Link to="/" role="button" className="admin__btn">Перейти на сайт</Link>
          <Outlet />
          </div>
      </div>
    </div>
  )
}

export default AdminLayout
