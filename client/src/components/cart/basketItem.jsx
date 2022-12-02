import React from 'react'
import { useDispatch } from 'react-redux'
import { decrease, increase, removeFromCart } from '../../store/cart'

const BasketItem = ({ product }) => {
  const dispatch = useDispatch()

  const imgUrl = `http://m977726h.beget.tech/images/eshop/product/${product.articul}-1.jpg`
  return (
    <div className="basket-product">
      <div className="basket-product__photo">
        <img src={imgUrl} alt="" />
      </div>
      <div className="basket-product__name">
        <div className="basket-product__title">{product.title}</div>
        <div className="basket-product__acticul">Арт: {product.articul}</div>
        <button className="basket-product__del" onClick={() => dispatch(removeFromCart(product.id))}>
          Удалить из корзины
        </button>
      </div>
      <div className="basket-product__quantity">
        <button onClick={() => dispatch(decrease(product.id))}>-</button>
        <input type="text" value={product.count} placeholder="1" readOnly />
        <button onClick={() => dispatch(increase(product.id))}>+</button>
      </div>
      <div className="basket-product__price">{product.price}</div>
      <div className="basket-product__total">{Math.round(product.count * product.price)}</div>
    </div>
  )
}

export default BasketItem
