import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import GeneralButton from '../../components/ui/generalButton'
import TextField from '../../components/ui/textField'
import { getCategories, getCategoriesLoading } from '../../store/categories'

const AdminCategorySlugEdit = () => {
  const { pathname } = useLocation()
  const { slug } = useParams()
  const navigate = useNavigate()
  const categories = useSelector(getCategories())
  const isLoading = useSelector(getCategoriesLoading())
  // const { id, title, imgName, descr, isShow } = !isLoading ? categories.filter((c) => c.slug === slug)[0] : {}
  const [data, setData] = React.useState({})
  // const imgCategory = `http://m977726h.beget.tech/images/eshop/${imgName}.png`

  React.useEffect(() => {
    if (categories) {
      setData(categories.filter((c) => c.slug === slug)[0])
    }
  }, [categories])
  return (
    <>
      {categories ? (
        <div className="admin-category-slug">
          <div className="admin-category-slug__wrapper">
            <form className="admin-edit-form">
              <div className="admin-edit-form__control">
                <label className="admin-edit-form__label" htmlFor="data.title">
                  Название серии
                </label>
                <input
                  className="admin-edit-form__input"
                  type="text"
                  id="data.title"
                  value={data.title}
                />
              </div>
              <div className="admin-edit-form__control">
                <label className="admin-edit-form__label" htmlFor="data.descr">
                  Описание
                </label>
                <textarea
                  className="admin-edit-form__textarea"
                  type="text"
                  id="data.descr"
                  value={data.descr}
                />
              </div>
              <div className="admin-edit-form__radio">
                <label className="radio-field__label">
                  <input type="radio" className="radio-field__real-radio" name="payment" value="cash" checked="" />
                  <span className="radio-field__custom-radio"></span>Отображать серию
                </label>
              </div>
              <div className="admin-edit-form__radio">
                <label className="radio-field__label">
                  <input type="radio" className="radio-field__real-radio" name="payment" value="cash" checked="" />
                  <span className="radio-field__custom-radio"></span>Скрыть серию
                </label>
              </div>
            </form>
            {/* <h2 className="admin-category-slug__title">{title}</h2>
            <div className="admin-category-slug__img">
              <img src={imgCategory} alt="" />
            </div>

            <div className="admin-category-slug__descr">{descr}</div>
            <div className="admin-category-slug__status">{isShow ? 'Активна' : 'Скрыта'}</div>
            <div className="admin-category-slug__btns">
              <GeneralButton link={`${pathname}/edit`} title="Редактировать" />
              <button type="button" className="admin__btn" onClick={() => navigate(-1)}>
                Назад
              </button>
            </div> */}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default AdminCategorySlugEdit
