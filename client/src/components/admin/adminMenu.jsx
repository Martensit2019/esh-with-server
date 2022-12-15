import React from 'react'
import { Link } from 'react-router-dom'

const menu = [
  { title: 'Товары', path: 'product' },
  { title: 'Серии', path: 'category' },
  { title: 'Заказы', path: 'order' },
  { title: 'Покупатели', path: 'customer' },
]

const AdminMenu = () => {
  return (
    <ul className="admin-menu">
      {menu.map((item) => (
        <li className="admin-menu__item" key={item.path}>
          <Link to={`/admin/${item.path}`} className="admin-menu__link">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default AdminMenu
