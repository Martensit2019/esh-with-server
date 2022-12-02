import React from 'react'
import Basket from './basket'
import CartOrder from './cartOrder'

const FullCart = () => {
  const [isShowCartOrder, setIsShowCartOrder] = React.useState(false)
  const [isThanks, setIsThanks] = React.useState(false)


  return (
    <>
      {!isThanks ? (
        <div className="cart-full">
          <Basket />
          {!isShowCartOrder && <button onClick={() => setIsShowCartOrder(true)}>Оформить</button>}
          {isShowCartOrder && <CartOrder />}
          <CartOrder finishOrder={()=>setIsThanks(true)} />
        </div>
      ) : (
        <div className="thanks">
          <h2>Спасибо за ваш заказ!</h2>
          <p>
             Если заказ оформлен правильно, подтверждение поступит в течение 1 часа (в рабочее время)
          </p>
          <p>Номер вашего заказа <span>№ 1227907</span> </p>
           
        </div>
      )}
    </>
  )
}

export default FullCart
