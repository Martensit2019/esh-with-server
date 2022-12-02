import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs'
import { useLocation } from 'react-router-dom'

const Product = () => {
  const { pathname } = useLocation()
  console.log(pathname);
  const pathnameArr = pathname.split('/')
  const slug = pathnameArr[pathnameArr.length - 1]
  const [product, setProduct] = useState({})
  const [isFav, setIsFav] = useState(false)
  const [isCompare, setIsCompare] = useState(false)

  const imgUrl = `http://m977726h.beget.tech/images/eshop/product/${product.articul}-1.jpg`

  useEffect(() => {
    axios.get(`http://localhost:3001/products?slug=${slug}`).then((res) => {
      console.log(res.data[0])
      setProduct(res.data[0])
    })
  }, [])

  const toggleFavorite = () => {
    setIsFav((prev) => !prev)
  }
  const toggleCompare = () => {
    setIsCompare((prev) => !prev)
  }

  return (
    <div className="product-page">
      <div className="container">
      <Breadcrumbs list={['Каталог', product.title]} />
        <div className="product-page__inner">
          <div className="product-page__img">
            <img src={imgUrl} alt="" />
          </div>
          <div className="product-page__content">
            <h1 className="product-page__title">{product.title}</h1>
            <h3 className="product-page__category">Lego {product.category}</h3>
            <div className="product-page__services">
              <button className="product-page__favorite" onClick={toggleFavorite}>
                <img src={'../images/icons/favourite' + (isFav ? '-card' : '') + '.svg'} alt="" />
              </button>
              <button className="product-page__compare" onClick={toggleCompare}>
                <img src={'../images/icons/compare' + (isCompare ? '-card' : '') + '.svg'} alt="" />
              </button>
              <div className="product-page__rate">star raiting</div>
            </div>
            <ul className="product-page__info">
              <li>
                <span>Артикул: </span>
                {product.articul}
              </li>
              <li>
                <span>Возраст: </span>от 2 лет
              </li>
              <li>
                <span>Количество деталей: </span>
                {product.pieces} шт.
              </li>
              <li>
                <span>Количество минифигурок: </span>
                {product.minifigs} шт.
              </li>
              <li>
                <span>Размер коробки: </span> 100 X 123 X 67 мм
              </li>
              <li>
                <span>Год выпуска: </span>
                {product.year}
              </li>
              <li>
                <span>Наличие: </span>В наличии
              </li>
            </ul>
            <div className="product-page__price">{product.price}</div>
            <button className="product-page__btn">В корзину</button>
          </div>
        </div>
        <div className="product-page__descr">{product.description}</div>
      </div>
    </div>
  )
}

export default Product
