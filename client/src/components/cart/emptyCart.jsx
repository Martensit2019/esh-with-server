import React from 'react'

const EmptyCart = () => {
  return (
    <div className="cart-empty">
      <img src="/images/emptycart.png" alt="" />
      <h2>Ваша корзина пуста.</h2>
      <div className="cart-empty__text">Подберите себе конструктор.</div>
    </div>
  )
}

export default EmptyCart
