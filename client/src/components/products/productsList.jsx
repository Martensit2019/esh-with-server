import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './productCard'
import ProductLine from './productLine'

const ProductsList = ({ products }) => {
  const activeGrid = useSelector((state) => state.filter.isGrid)
  return (
    <>
      {activeGrid ? (
        <div className="product-list-grid">
          {products.map((product) => (            
              <ProductCard product={product} key={product.id} />
            
          ))}
        </div>
      ) : (
        <div className="product-card__line">
          {products.map((product) => (
            <ProductLine product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  )
}

export default ProductsList
