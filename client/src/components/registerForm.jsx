import React from 'react'
import TextField from './cart/textField'
import { validator } from '../utils/validator'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../store/auth'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const [errors, setErrors] = React.useState({})
  const [data, setData] = React.useState({
    fio: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  })

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для запоолнения' },
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
    // axios.post('http://localhost:8080/api/auth/signUp', data)
    dispatch(signUp(data))
  }
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  return (
    <form className="auth-page__form" onSubmit={handleSubmit}>
      <TextField placeholder="ФИО" value={data.fio} name="fio" error={errors.fio} onChange={handleChange} />
      <TextField placeholder="Email" value={data.email} name="email" error={errors.email} onChange={handleChange} />
      <TextField placeholder="Пароль" type="password" value={data.password} name="password" error={errors.password} onChange={handleChange} />
      <TextField placeholder="Телефон" value={data.phone} name="phone" error={errors.phone} onChange={handleChange} />
      <TextField placeholder="Адрес" value={data.address} name="address" error={errors.address} onChange={handleChange} />
      <button type="submit" disabled={!isValid} className="auth-page__btn">
        Отправить
      </button>
    </form>
  )
}

export default RegisterForm
