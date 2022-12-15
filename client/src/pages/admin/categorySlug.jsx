import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import GeneralButton from '../../components/ui/generalButton'
import { getCategories, getCategoriesLoading } from '../../store/categories'

const AdminCategorySlug = () => {
  const { pathname } = useLocation()
  const { slug } = useParams()
  const navigate = useNavigate()
  const categories = useSelector(getCategories())
  const isLoading = useSelector(getCategoriesLoading())
  const { id, title, imgName, descr, isShow } = !isLoading ? categories.filter((c) => c.slug === slug)[0] : {}
  const imgCategory = `http://m977726h.beget.tech/images/eshop/${imgName}.png`

  return (
    <>
      {categories && (
        <div className="admin-category-slug">
          <div className="admin-category-slug__wrapper">
            <h2 className="admin-category-slug__title">{title}</h2>
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
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AdminCategorySlug
