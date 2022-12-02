import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, NavLink } from 'react-router-dom'
import Logo from '../logo'
import Burger from './burger'
import HeaderCart from './headerCart'
import HeaderMenu from './headerMenu'
import Search from './search'
import UserServices from './userServices'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top__inner">
            <Burger />
            <Search />
            <UserServices />
            <Link to="/cart">
              <HeaderCart />
            </Link>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="header-bottom__inner">
            <Logo />
            <HeaderMenu />
            <div
              className="user__profile"
              style={{  }}
              onClick={() => setIsVisible(!isVisible)}
            >
              Пантелеймон
              <div className="user__list-item" style={{ display: 'flex', marginLeft: '15px' }}>
                <div
                  style={{ width: '30px', border: '1px solid: red', borderRadius: '50%', display: 'flex', alignItems: 'center', textAlign: 'center' }}
                >
                  {/* <img src="/images/icons/user.svg" alt="" /> */}
                </div>
              </div>
            </div>
            {isVisible && (
              <div
                style={{
                  position: 'absolute',
                  width: '120px',
                  padding: '10px',
                  right: '15px',
                  top: '122px',
                  backgroundColor: '#ffc42e',
                }}
              >
                Профиль
                <br />
                Мои заказы
                <br />
                Выход
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
