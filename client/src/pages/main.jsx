import React from 'react'
import CategoryCard from '../components/category/categoryCard'
import { useSelector } from 'react-redux'
import { getCategories, getCategoriesLoading } from '../store/categories'

const Main = () => {
  const categories = useSelector(getCategories())
  const isLoading = useSelector(getCategoriesLoading())

  return (
    <main className="main">
      <div className="container">
        <h1 className="title-general">Серии конструкторов Лего</h1>
        <div className="main__wrapper">
          <div className="main__inner">
            {!isLoading ? categories.map((category) => <CategoryCard category={category} key={category.id} />) : 'Loading...'}
          </div>
        </div>
        {/* Надо будет ещё сделать три блока

        <div className="stock">
          <h2>Хиты продаж</h2>
          <div style={{ width: '100%' }}>
            <div className="product-card__wrapper">
            </div>
          </div>
        </div>
        <div className="stock">
          <h2>Новинки</h2>
          <div style={{ width: '100%' }}>
            <div className="product-card__wrapper">
            </div>
          </div>
        </div>
        <div className="stock">
          <h2>Акции</h2>
          <div style={{ width: '100%' }}>
            <div className="product-card__wrapper">
            </div>
          </div>
        </div> */}
      </div>
    </main>
  )
}

export default Main
