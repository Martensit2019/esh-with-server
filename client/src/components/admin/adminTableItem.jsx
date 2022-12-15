import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const AdminTableItem = ({ item }) => {
  const dispatch = useDispatch()
const {title, imgName, slug, isShow}=item
  const imgUrl=`http://m977726h.beget.tech/images/eshop/${imgName}.png`
  return (
    <div className="basket-product" style={{'gridTemplateColumns': 'repeat(4, 1fr)'}}>
      <div className="basket-product__photo">
        <img src={imgUrl} alt="" />
      </div>
      <div className="basket-product__name">
        <div className="basket-product__title">{title}</div>
      </div>
      <div className="checkbox">
      <button className="basket-product__del">{isShow? 'Активна':'Неактивна'}</button>
      </div>
      <div>
      <Link to={`/admin/category/${slug}`} role="button" className="admin__btn">
          Подробнее
        </Link>
      </div>
    </div>
  )
}

export default AdminTableItem