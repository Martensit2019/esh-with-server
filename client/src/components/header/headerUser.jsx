import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getCurrentUser, logOut } from '../../store/auth'
const HeaderUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector(getCurrentUser())
  const [isVisible, setIsVisible] = React.useState(false)

const handleClick= ()=>{
  dispatch(logOut())
  navigate("login")
}
console.log('currentUser', currentUser);
  return currentUser === null ? (
    <div className="header-user">
      <Link to="/login" className="header-user__name">
        Войти
      </Link>
    </div>
  ) : (
    <div className="header-user" onClick={() => setIsVisible(!isVisible)}>
      <div className="header-user__name">{currentUser.fio}</div>
      {isVisible && (
        <ul className="header-user__list">
          {currentUser.role==='admin' &&<li className="header-user__item">
            <Link to="/admin" className="header-user__link">
              Панель администратора
            </Link>
          </li>}
          <li className="header-user__item">
            <Link to="/profile" className="header-user__link">
              Профиль
            </Link>
          </li>
          <li className="header-user__item" onClick={handleClick}>
            Выход
          </li>
        </ul>
      )}
    </div>
  )
}

export default HeaderUser
