import React from 'react'
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs'

const StatusOrder = () => {
  return (
    <div className="category-page">
      <div className="container">
        <div style={{ width: '100%' }}>
          <Breadcrumbs list={['Проверить статус заказа']} />
          <h1>Проверить статус заказа</h1>
          <form>
            <div>
              <input type="text" placeholder='Введите номер заказа' />
            </div>
            <button>Проверить</button>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default StatusOrder
