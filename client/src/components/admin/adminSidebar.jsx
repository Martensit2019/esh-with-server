import React from 'react'
import { Link } from 'react-router-dom'
import AdminMenu from './adminMenu'

const AdminSidebar = () => {
  return (
    <div className="admin__sidebar">
      <Link to="/admin">
        <div className="admin__user">Admin</div>
      </Link>

      <AdminMenu />
    </div>
  )
}

export default AdminSidebar
