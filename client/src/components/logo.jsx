import React from 'react'
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src="/images/icons/logo.svg" alt="" className="logo__img" />
      </Link>
    </div>
  )
}

export default Logo
