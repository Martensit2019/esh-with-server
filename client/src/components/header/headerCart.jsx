import React from 'react'
import { useSelector } from 'react-redux'
import { totalPriceCart, totalProductsCart } from '../../store/cart'

const HeaderCart = () => {
  const itemsCart = useSelector(totalProductsCart())
  const sumCart = useSelector(totalPriceCart())
  return (
    <div className="header-cart">
      <div className="header-cart__left">
        <div className="header-cart__img">
          <img src="/images/icons/cart.svg" alt="" />
          {!!itemsCart && <div className="user-services__cart--sup">{itemsCart}</div>}
        </div>
      </div>
      <div className="header-cart__right">
        <div className="header-cart__right-top">{Math.round(sumCart)} P</div>
        <div className="header-cart__right-bottom">Оформить&nbsp;заказ</div>
      </div>
    </div>
  )
}

export default HeaderCart
