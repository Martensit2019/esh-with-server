import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart, idsProductsCart } from '../../store/cart'
import { addToCompare, idsProductsCompare, removeFromCompare } from '../../store/compare'
import { addToFavourite, idsProductsFavourite, removeFromFavourite } from '../../store/favourite'

const ProductLine = ({ product }) => {
  const { id, slug, articul, title, category, description, price } = product
 const dispatch =useDispatch()
  const idsFav = useSelector(idsProductsFavourite())
  const idsCompare = useSelector(idsProductsCompare())
  const idsCart = useSelector(idsProductsCart())
  const isProductFav = idsFav.includes(id)
  const isProductCompare = idsCompare.includes(id)
  const isProductCart = idsCart.includes(id)
  const [isFav, setIsFav] = useState(isProductFav)
  const [isCompare, setIsCompare] = useState(isProductCompare)
  const [isCart, setIsCart] = useState(isProductCart)
 

  const imgUrl = `http://m977726h.beget.tech/images/eshop/product/${articul}-1.jpg`

  const toggleFavorite = () => {
    if (isFav) {
      dispatch(removeFromFavourite(id))
    } else {
      const itemFav = {
        id,
        slug,
        articul,
        title,
        category,
        price,
      }
      dispatch(addToFavourite(itemFav))
    }
    setIsFav((prev) => !prev)
  }
  const toggleCompare = () => {
    if (isCompare) {
      dispatch(removeFromCompare(id))
    } else {
      const itemCompare = {
        id,
        slug,
        articul,
        title,
        category,
        price,
      }
      dispatch(addToCompare(itemCompare))
    }
    setIsCompare((prev) => !prev)
  }
  const toggleCart = () => {
    if (isCart) {
      dispatch(removeFromCart(id))
    } else {
      const itemCart = {
        id,
        title,
        articul,
        price,
        count: 1,
      }
      dispatch(addToCart(itemCart))
    }
    setIsCart((prev) => !prev)
  }

  return (
    <div className="product-line">
      <Link to={`/product/${slug}`}>
          <div className="product-line__img">
        <img src={imgUrl} alt="" />
      </div>
      </Link>
    
      <div className="product-line__content">
        <h3 className="product-line__title">{title}</h3>
        <div className="product-line__articul">
          {category} {articul}
        </div>
        <div className="product-line__descr">{description} {description}</div>
        <div className="product-line__footer">
          <div className="product-line__servises">
            <button className="product-line__favorite" onClick={toggleFavorite}>
              <img src={'../images/icons/favourite' + (isFav ? '-card' : '') + '.svg'} alt="" />
            </button>
            <button className="product-line__compare" onClick={toggleCompare}>
            <img src={'../images/icons/compare' + (isCompare ? '-card' : '') + '.svg'} alt="" />
            </button>
          </div>
          <div className="product-line__info">
            <div className="product-line__price">{Math.round(price)}p.</div>

            <button className={`product-line__btn ${isCart ? ' active' : ''}`} onClick={toggleCart}>
          {isCart ? 'Удалить':'В корзину'}
        </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductLine
