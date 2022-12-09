import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, NavLink } from 'react-router-dom'
import Logo from '../logo'
import Burger from './burger'
import HeaderCart from './headerCart'
import HeaderMenu from './headerMenu'
import HeaderUser from './headerUser'
import Search from './search'
import UserServices from './userServices'

const Header = () => {

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
            <HeaderUser />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
