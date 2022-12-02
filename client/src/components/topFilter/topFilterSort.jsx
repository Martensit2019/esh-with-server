import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedSort } from '../../store/filter'

const sortList = [
  { id: 1, value: 'default', name: 'по умолчанию' },
  { id: 2, value: '-price', name: 'сначала дорогие' },
  { id: 3, value: 'price', name: 'сначала недорогие' },
  { id: 4, value: 'title', name: 'по названию (А - Я)' },
  { id: 5, value: '-title', name: 'по названию (Я - А)' },
]
// const sortList = [
//   { id: 1, value: 'default', name: 'по умолчанию' },
//   { id: 2, value: 'expensive', name: 'сначала дорогие' },
//   { id: 3, value: 'cheap', name: 'сначала недорогие' },
//   { id: 4, value: 'asc', name: 'по названию (А - Я)' },
//   { id: 5, value: 'desc', name: 'по названию (Я - А)' },
// ]

const TopFilterSort = () => {
  const selectedSort = useSelector((state) => state.filter.selectedSort)
  const dispatch = useDispatch()
  const [isVisible, setIsVisible] = useState(false)
  const handleClick = (item) => {
    dispatch(setSelectedSort(item))
    setIsVisible(!isVisible)
  }

  return (
    <div className="top-filter__sort">
      Сортировать:
      <span onClick={() => setIsVisible(!isVisible)}>{selectedSort.name}</span>
      {isVisible && (
        <div className="top-filter__sort-list">
          <ul>
            {sortList.map((item) => (
              <li className={selectedSort.value === item.value ? 'active' : ''} key={item.id} onClick={() => handleClick(item)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default TopFilterSort
