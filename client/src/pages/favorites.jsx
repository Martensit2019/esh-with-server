import React from 'react'
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs'

const FavoritesPage = () => {
  return (
    <div className="category-page">
      <div className="container">
        <div style={{ width: '100%' }}>
          <Breadcrumbs list={['Избранное']} />
          <h1>Избранное</h1>
        </div>
      </div>
    </div>
  )
}

export default FavoritesPage