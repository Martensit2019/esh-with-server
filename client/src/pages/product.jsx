import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs'
import { useLocation } from 'react-router-dom'
import { getProducts, getProductsLoading, loadProductBySlug } from '../store/products'
import Loader from '../components/ui/loader'

const Product = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const pathnameArr = pathname.split('/')
  const slug = pathnameArr[pathnameArr.length - 1]
  const products = useSelector(getProducts())
  const isProductsLoading = useSelector(getProductsLoading())
  const [product, setProduct] = useState({})
  const [imgUrl, setImgUrl] = useState('')
  const [isFav, setIsFav] = useState(false)
  const [isCompare, setIsCompare] = useState(false)

  useEffect(() => {
    dispatch(loadProductBySlug(slug))
  }, [slug])
  useEffect(() => {
    if (!isProductsLoading) {
      setProduct(products[0])
      setImgUrl(`http://m977726h.beget.tech/images/eshop/product/${products[0].articul}-1.jpg`)
    }
  }, [isProductsLoading])

  const toggleFavorite = () => {
    setIsFav((prev) => !prev)
  }
  const toggleCompare = () => {
    setIsCompare((prev) => !prev)
  }

  return (
    <div className="product-page">
      {!isProductsLoading ? <div className="container">
        <Breadcrumbs list={['Каталог', products[0].title]} />
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
      </div>:<Loader />}
    </div>
  )
}

export default Product
