import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import RadioField from '../../components/cart/radioField'
import AdminTextArea from './ui/adminTextArea'
import AdminTextField from './ui/adminTextField'
import translit from '../../services/translit'
import { createCategory } from '../../store/categories'
import { useDispatch } from 'react-redux'

const AdminCategoryCreate = () => {
  const dispatch =useDispatch()
  const [data, setData] = React.useState({
    title: '',
    descr: '',
    imgName: 'lego',
    isShow: true,
  })
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const options = [
    { name: 'Отображать серию', value: true },
    { name: 'Скрыть серию', value: false },
  ]

  const setVal = (val) => {
    if (val === 'true') return true
    if (val === 'false') return false
    return val
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // const isValid = validate()
    // if (!isValid) return
    data.slug = translit(data.title)
    // console.log(data)
    
    dispatch(createCategory(data))
  }

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: setVal(target.value),
    }))
  }
  return (
    <div className="admin-category-slug">
      {data.isShow}
      <div className="admin-category-slug__wrapper">
        <form className="admin-edit-form" onSubmit={handleSubmit}>
          <AdminTextField label="Название серии" name="title" value={data.title} onChange={handleChange} />
          <AdminTextArea label="Описание" name="descr" value={data.descr} onChange={handleChange} />
          <RadioField options={options} classes="admin-edit-form__radio" value={data.isShow} name="isShow" onChange={handleChange} />
          <button type="submit" className="admin__btn">
            Добавить серию
          </button>
          <button type="button" className="admin__btn" onClick={() => navigate(-1)}>
            Назад
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminCategoryCreate
