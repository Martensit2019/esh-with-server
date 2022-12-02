import React from 'react'
import { Link } from 'react-router-dom'
const HeaderMenu = () => {
  return (
    <nav className="header-menu">
      <ul className="header-menu__list">
        <li className="header-menu__item">
          <Link to="/catalog" className="header-menu__link">
            <img src="/images/icons/product-catalog.svg" alt="" />
            Каталог
          </Link>
        </li>
        <li className="header-menu__item mob">
          <Link to="/dlya-malyshey" className="header-menu__link">
            <img src="/images/icons/baby.svg" alt="" />
            для малышей
          </Link>
        </li>
        <li className="header-menu__item mob">
          <Link to="/dlya-malchikov" className="header-menu__link">
            <img src="/images/icons/boy.svg" alt="" />
            для мальчиков
          </Link>
        </li>
        <li className="header-menu__item mob">
          <Link to="/dlya-devochek" className="header-menu__link">
            <img src="/images/icons/girl.svg" alt="" />
            для девочек
          </Link>
        </li>
        <li className="header-menu__item mob">
          <Link to="/dlya-vzroslyh" className="header-menu__link">
            <img src="/images/icons/man.svg" alt="" />
            для взрослых
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMenu
