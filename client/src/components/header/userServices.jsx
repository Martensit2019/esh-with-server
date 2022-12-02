import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { totalProductsFavourite } from '../../store/favourite'
import { totalProductsCompare } from '../../store/compare'

const UserServices = () => {
  const itemsFav = useSelector(totalProductsFavourite())
  const itemsCompare = useSelector(totalProductsCompare())
  const services = [
    { img: 'status-order', title: 'Статус_заказа', link: '/statusorder' },
    { img: 'favourite', title: 'Избранное', link: '/favourites', count: itemsFav },
    { img: 'compare', title: 'Сравнение', link: '/compare', count: itemsCompare },
  ]

  return (
    <div className="user-services">
      {services.map((s) => (
        <Link to={s.link} className="user-services__item" key={s.link}>
          <img src={`/images/icons/${s.img}.svg`} alt="" />
          {s.title}
          {!!s.count && <div className="user-services__item--sup">{s.count}</div>}
        </Link>
      ))}
    </div>
  )
}

export default UserServices
