import React from 'react'
import { useParams } from 'react-router-dom'
import LoginForm from '../components/loginForm'
import RegisterForm from '../components/registerForm'

const Login = () => {
  const { type } = useParams()
  const [formType, setFormType] = React.useState(type === 'register' ? type : 'login')
  const toggleFormType = () => {
    setFormType((prevState) => (prevState === 'register' ? 'login' : 'register'))
  }

  return (
    <>
      <div className="auth-page">
        <div className="container">
          <h3 className="order-subtitle">{formType === 'register' ?'Регистрация': 'Вход'}</h3>
          {/* <h3 className="order-subtitle">Регистрация</h3> */}
          {/* <h3 className="auth-page__subtitle">Регистрация</h3> */}
          <div className="auth-page__wrapper">
            {formType === 'register' ? (
              <>
                <RegisterForm />
                <div className='auth-page__text'>
                  Уже совершали покупки?{' '}
                  <a className='auth-page__link' role="button" onClick={toggleFormType}>
                    Войти
                  </a>
                </div>
              </>
            ) : (
              <>
                <LoginForm />
                <div className='auth-page__text'>
                  Ещё не покупали у нас?{' '}
                  <a className='auth-page__link' role="button" onClick={toggleFormType}>
                    Зарегистрироваться
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
