import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import RadioField from '../../components/cart/radioField'
import GeneralButton from '../../components/ui/generalButton'
import TextField from '../../components/ui/textField'
import { getCategories, getCategoriesLoading, updateCategory } from '../../store/categories'
import AdminTextArea from './ui/adminTextArea'
import AdminTextField from './ui/adminTextField'

const AdminCategorySlugEdit = () => {
  const dispatch=useDispatch()
  const { pathname } = useLocation()
  const { slug } = useParams()
  const navigate = useNavigate()
  const categories = useSelector(getCategories())
  const isLoading = useSelector(getCategoriesLoading())
  // const { id, title, imgName, descr, isShow } = !isLoading ? categories.filter((c) => c.slug === slug)[0] : {}
  const [data, setData] = React.useState({
    title: '',
    descr: '',
    isShow: true,
  })
  // const imgCategory = `http://m977726h.beget.tech/images/eshop/${imgName}.png`
  const [title, setTitle] = React.useState()
  const options = [
    { name: 'Отображать серию', value: true },
    { name: 'Скрыть серию', value: false },
  ]

  React.useEffect(() => {
    if (categories) {
      setData(categories.filter((c) => c.slug === slug)[0])
    }
  }, [isLoading])

 

  const setVal = (val) => {
    if (val === 'true') return true
    if (val === 'false') return false
    return val
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // const isValid = validate()
    // if (!isValid) return
    console.log(data)
    // dispatch(signUp(data))
    
    dispatch(updateCategory(data))
  }

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: setVal(target.value),
    }))
  }
  return (
    <>
      {categories ? (
        <div className="admin-category-slug">
          {data.isShow}
          <div className="admin-category-slug__wrapper">
            <form className="admin-edit-form" onSubmit={handleSubmit}>
              <AdminTextField label="Название серии" name="title" value={data.title} onChange={handleChange} />
              <AdminTextArea label="Описание" name="descr" value={data.descr} onChange={handleChange} />
              <RadioField options={options} classes="admin-edit-form__radio" value={data.isShow} name="isShow" onChange={handleChange} />
              <button type="submit" className="admin__btn" disabled={data.title.trim()===''}>
                Сохранить изменения
              </button>
              <button type="button" className="admin__btn" onClick={() => navigate(-1)}>
                Назад
              </button>
            </form>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default AdminCategorySlugEdit
