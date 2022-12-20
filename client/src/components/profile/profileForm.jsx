import React from 'react'
import TextField from '../cart/textField'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../store/auth'

const ProfileForm = ({ user }) => {
  const dispatch = useDispatch()
  const { fio, phone, address } = user
  const [errors, setErrors] = React.useState({})
  const [data, setData] = React.useState({
    fio,
    phone: phone || 'не указан',
    address: address || 'не указан',
  })
  console.log('user', user)
  console.log('data', data)
  React.useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = {}
    for (const fieldName in data) {
      if (data[fieldName].trim() === '') {
        errors[fieldName] = `поле обязательно для заполнения`
      }
    }
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  const save = () => {
    for (const fieldName in data) {
      if (data[fieldName].trim() === 'не указан') {
        data[fieldName] = ''
      }
    }
    const updatedUser = { ...user, fio: data.fio, phone: data.phone, address: data.address }
    console.log('data', data)
    console.log('user', user)
    console.log('upd', updatedUser)
   dispatch(updateUser(updatedUser))
    // dispatch(logIn({ payload: data, redirect }))
    
  }

  return (
    <>
      <TextField placeholder="ФИО" value={data.fio} name="fio" error={errors.fio} onChange={handleChange} />
      <TextField placeholder="Телефон" value={data.phone} name="phone" error={errors.phone} onChange={handleChange} />
      <TextField placeholder="Адрес" value={data.address} name="address" error={errors.address} onChange={handleChange} />
      <button type="button" className="profile-page__btn profile-page__btn--save" disabled={Object.keys(errors).length} onClick={save}>
        Сохранить изменения
      </button>
    </>
  )
}

export default ProfileForm
