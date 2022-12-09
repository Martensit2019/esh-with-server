import React from 'react'
import { Link } from 'react-router-dom'
const HeaderUser = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  return (
    <div className="header-user" onClick={() => setIsVisible(!isVisible)}>
      <div className="header-user__name">Войти</div> 
      {/* <div className="header-user__name">Пантелеймон</div>  */}
      {/* <div className="user__list-item" style={{ display: 'flex' }}>
        <div
          style={{ width: '30px', border: '1px solid: red', borderRadius: '50%', display: 'flex', alignItems: 'center', textAlign: 'center' }}
        >
          <img src="/images/icons/user.svg" alt="" />
        </div>
      </div> */}
      {isVisible && (
        <ul className="header-user__list">
          <li className="header-user__item">
          <Link to="/user-profile" className="header-user__link">Профиль</Link>
          </li>
          <li className="header-user__item">Выход</li>
        </ul>
      )}
    </div>
  )
}

export default HeaderUser