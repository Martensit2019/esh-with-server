import React from 'react'
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs'

const ComparePage = () => {
  return (
    <div className="category-page">
      <div className="container">
        <div style={{ width: '100%' }}>
          <Breadcrumbs list={['Сравнение товаров']} />
          <h1>Сравнение товаров</h1>
        </div>
      </div>
    </div>
  )
}

export default ComparePage