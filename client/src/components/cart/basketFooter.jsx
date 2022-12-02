import React from 'react';
import { useSelector } from 'react-redux'
import { totalPriceCart } from '../../store/cart'

const BasketFooter = () => {
  const sumCart = useSelector(totalPriceCart())
  return ( 
    <div className="basket-footer">
        <div className="basket-footer__left">Общая стоимость игрушек без учёта доставки:</div>
        <div className="basket-footer__left">{Math.round(sumCart)} P</div>
      </div>
   );
}
 
export default BasketFooter;