import React from 'react'
import classnames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { setProductsPerPage } from '../../store/filter'

const TopFilterPageSize = () => {
  const productsPerPage = useSelector((state) => state.filter.productsPerPage)
  const dispatch = useDispatch()
  // const productsPerPageArr = [1, 2, 3, 5]
  const productsPerPageArr = [25, 50, 75, 100]

  return (
    <div className="top-filter__btns-count">
      <span>Показать по: </span>
      {productsPerPageArr.map((count) => (
        <button
          className={classnames('top-filter__btn-count', {
            active: count === productsPerPage,
          })}
          key={count}
          onClick={()=>dispatch(setProductsPerPage(count))}
        >
          {count}
        </button>
      ))}
    </div>
  )
}

export default TopFilterPageSize
