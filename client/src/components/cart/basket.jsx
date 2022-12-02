import React from 'react'
import { useSelector } from 'react-redux'
import BasketFooter from './basketFooter'
import BasketHeader from './basketHeader'
import BasketItem from './basketItem'

const Basket = () => {
  const basket = useSelector((state) => state.cart.cart)
  return (
    <div className="basket">
      <div className="basket__inner">
        <BasketHeader />
        {basket.map((item) => (
          <BasketItem product={item} key={item.id} />
        ))}
        <BasketFooter />
      </div>
    </div>
  )
}

export default Basket
