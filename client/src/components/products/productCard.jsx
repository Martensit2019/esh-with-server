import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import translit from '../../services/translit'
import { addToCart, removeFromCart, idsProductsCart } from '../../store/cart'
import { addToCompare, idsProductsCompare, removeFromCompare } from '../../store/compare'
import { addToFavourite, idsProductsFavourite, removeFromFavourite } from '../../store/favourite'

const ProductCard = ({ product }) => {
  const { id, slug, articul, title, category, price } = product
  const dispatch = useDispatch()
  const idsFav = useSelector(idsProductsFavourite()) // проверяем, в избранном ли товар
  const idsCompare = useSelector(idsProductsCompare()) // проверяем, в избранном ли товар
  const idsCart = useSelector(idsProductsCart()) // проверяем, в корзине ли товар
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
    <div className="product-card">
      <Link to={`/product/${slug}`}>
        <div className="product-card__img">
          <img src={imgUrl} alt="" />
        </div>
      </Link>

      <div className="product-card__articul">
        {category} {articul}
      </div>
      <h3 className="product-card__title">{title}</h3>
      <div className="product-card__price">{Math.round(price)}p.</div>

      <div className="product-card__foter">
        <div className="product-card__services">
          <button type="button" className="product-card__favorite" onClick={toggleFavorite}>
            <img src={'../images/icons/favourite' + (isFav ? '-card' : '') + '.svg'} alt="" />
          </button>
          <button type="button" className="product-card__compare" onClick={toggleCompare}>
            <img src={'../images/icons/compare' + (isCompare ? '-card' : '') + '.svg'} alt="" />
          </button>
        </div>
        <button className={`product-card__basket ${isCart ? ' active' : ''}`} onClick={toggleCart}>
          {isCart ? 'Удалить' : 'В корзину'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
