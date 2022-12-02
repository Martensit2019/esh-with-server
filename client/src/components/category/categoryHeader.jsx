import React from 'react'

const CategoryHeader = ({ imgName, descr }) => {
  const imgCategory = `http://m977726h.beget.tech/images/eshop/${imgName}.png`
  return (
    <div className="category-page__top">
      <div className="category-page__top-img">
        <img src={imgCategory} alt="" />
      </div>
      <div className="category-page__top-descr">{descr}</div>
    </div>
  )
}

export default CategoryHeader
