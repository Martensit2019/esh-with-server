import React from 'react'

const titles = ['Фото', 'Наименование', 'Количество', 'Цена', 'Стоимость']

const BasketHeader = () => {
  return (
    <div className="basket-header">
      {titles.map((title) => (
        <div className="basket-header__item" key={title}>
          {title}
        </div>
      ))}
    </div>
  )
}

export default BasketHeader
