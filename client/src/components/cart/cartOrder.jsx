import React from 'react'
import { useSelector } from 'react-redux'
import httpService from '../../services/http.service'
import { getCart, totalPriceCart } from '../../store/cart'
import RadioField from './radioField'
import TextField from './textField'

const CartOrder = ({finishOrder}) => {
  
  const cart = useSelector(getCart())
  const totalAmount = useSelector(totalPriceCart())
  
  const [data, setData] = React.useState({
    fio: '',
    email: '',
    phone: '',
    address: '',
    delivery: 'msk',
    payment: 'cash'
  })
  const deliveryOptions = [
    { name: 'По Москве', value: 'msk' },
    { name: 'Самовывоз', value: 'pickup' },
  ]
  const paymentOptions = [
    { name: 'Оплата наличными при получении', value: 'cash' },
    { name: 'Оплата банковской картой при получении', value: 'card' },
    { name: 'Предоплата по карте на сайте', value: 'prepayment' },
    { name: 'Предоплата банке по счету для физ или юр лиц', value: 'receipt' },
  ]
  const [errors, setErrors] = React.useState({})

  React.useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = {}
    for (const fieldName in data) {
      if (data[fieldName].trim() === '') {
        errors[fieldName] = `${fieldName} обязательно для заполнения`
      }
    }
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    data.cart=cart
    console.log(data)
    httpService.post('orders', data)
    // finishOrder()
  }
  return (
    <div className="order">
      <h2 className="order-title">Оформление заказа</h2>
      <form className="order-form" onSubmit={handleSubmit}>
        <h3 className="order-subtitle">Способ доставки</h3>

        <div className="order-delivery">
          <div className="order-delivery__items">
            <RadioField options={deliveryOptions} classes="order-delivery__item" value={data.delivery} name="delivery" onChange={handleChange} />
          </div>
          <div className="order-delivery__footer">
            <div className="order-delivery__footer-item">
              Стоимость доставки вашего заказа
              <span>{data.delivery === 'msk' ? '350₽' : 'бесплатно'} </span>
            </div>
            <div className="order-delivery__footer-item">
              ОБЩАЯ СТОИМОСТЬ ЗАКАЗА <span>{data.delivery === 'msk' ? Math.round(totalAmount) + 350 : Math.round(totalAmount)} ₽</span>
            </div>
          </div>
        </div>
        <div className="order-details">
          <div className="order-details__col">
            <h3 className="order-subtitle">Информация о покупателе</h3>
            <TextField placeholder="ФИО" value={data.fio} name="fio" error={errors.fio} onChange={handleChange} />
            <TextField placeholder="Email" value={data.email} name="email" error={errors.email} onChange={handleChange} />
            <TextField placeholder="Телефон" value={data.phone} name="phone" error={errors.phone} onChange={handleChange} />
            <TextField placeholder="Адрес" value={data.address} name="address" error={errors.address} onChange={handleChange} />
          </div>

          <div className="order-details__col">
            <h3 className="order-subtitle">Способ оплаты</h3>
            <RadioField
              options={paymentOptions}
              classes="order-details__items"
              value={data.payment}
              name="payment"
              onChange={handleChange}
            />
            <p className="order-text">
            Нажатием кнопки "Отправить заказ" Вы подтверждаете свое согласие с Договором оферты и даете своё согласие на обработку своих персональных данных на условиях, определенных Политикой конфиденциальности.
            </p>
            <button className="order-btn">Отправить заказ</button>
          </div>
        </div>
        
      </form>
    </div>
  )
}

export default CartOrder
