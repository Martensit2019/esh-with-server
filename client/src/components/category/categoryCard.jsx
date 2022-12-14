import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({category}) => {
  const {title, slug, imgName, isShow}= category
  const imgUrl=`http://m977726h.beget.tech/images/eshop/${imgName}.png`
  return (
    <>
       {isShow===true&&<Link to={`/catalog/${slug}`}>
      <div className="category-card">
          <img src={imgUrl} alt={title} />
      </div>
    </Link>}
    </>
 
  )
}

export default CategoryCard
