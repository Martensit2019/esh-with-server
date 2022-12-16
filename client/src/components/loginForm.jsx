import React from 'react'
import TextField from '../components/cart/textField'
import { validator } from '../utils/validator'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthErrors, logIn } from '../store/auth'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [errors, setErrors] = React.useState({})
  const [data, setData] = React.useState({
    email: '',
    password: '',
  })
  const loginError = useSelector(getAuthErrors())

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполнения' },
      isEmail: { message: 'Email введён некорректно' },
    },
    password: {
      isRequired: { message: 'Пароль обязателен для заполнения' },
      isCapitalSymbol: { message: 'Пароль должен содержать хотябы одну заглавную букву' },
      isContainDigit: { message: 'Пароль должен содержать хотябы одно число' },
      min: { message: 'Пароль должен соcтоять минимум из 8 символов', valie: 8 },
    },
  }

  React.useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
    const redirect = 'REDIRECT' // откуда пришёл до логина
    dispatch(logIn({ payload: data, redirect }))
      .unwrap()
      .then(() => {
        navigate("profile")
      })
      
  }
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  return (
    <form className="auth-page__form" onSubmit={handleSubmit}>
      <TextField placeholder="Email" value={data.email} name="email" error={errors.email} onChange={handleChange} />
      <TextField placeholder="Пароль" type="password" value={data.password} name="password" error={errors.password} onChange={handleChange} />

      {loginError && <p className="order-form__error begorebtn">{loginError}</p>}
      <button type="submit" disabled={!isValid} className="auth-page__btn">
        Войти
      </button>
    </form>
  )
}

export default LoginForm
