import React from 'react'
import { useSelector } from 'react-redux'
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs'
import EmptyCart from '../components/cart/emptyCart'
import FullCart from '../components/cart/fullCart'
import { getCart } from '../store/cart'

const Cart = () => {
  
  const cart = useSelector(getCart())

  return (
    <div className="cart-page">
      <div className="container">
        <div style={{ width: '100%' }}>
          <Breadcrumbs list={['Корзина']} />
          <h1>Моя корзина</h1>
        {!cart.length ? <EmptyCart /> : <FullCart />}
      </div>
    </div>
    </div>
  )
}

export default Cart
