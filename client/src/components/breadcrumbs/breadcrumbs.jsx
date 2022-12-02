import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import './breadcrumbs.scss'

const Breadcrumbs = ({ list }) => {
  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__link">
            Главная
          </Link>
        </li>
        {list.length > 1 && (
          <li className="breadcrumbs__item">
            <Link to="/catalog" className="breadcrumbs__link">
              Каталог
            </Link>
          </li>
        )}
        <li className="breadcrumbs__item">
          <span>{list.slice(-1)}</span>
        </li>
      </ul>
    </div>
  )
}

export default Breadcrumbs
