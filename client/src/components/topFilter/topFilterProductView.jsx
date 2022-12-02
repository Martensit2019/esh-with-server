import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setListView } from '../../store/filter'

const TopFolterProductView = () => {
  const activeGrid = useSelector((state) => state.filter.isGrid)
  const dispatch = useDispatch()
  const changeView = () => dispatch(setListView())

  return (
    <div className="top-filter__btns-grid">
      <button className="top-filter__btngrid" onClick={changeView}>
        <svg width="23" height="20" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="21" height="19" stroke={activeGrid ? '#ffc42e' : '#2F3035'} strokeWidth="2" />
          <rect
            x="7"
            y="6"
            width="2"
            height="2"
            fill={activeGrid ? '#ffc42e' : '#2F3035'}
            stroke={activeGrid ? '#ffc42e' : '#2F3035'}
            strokeWidth="2"
          />
          <rect
            x="7"
            y="13"
            width="2"
            height="2"
            fill={activeGrid ? '#ffc42e' : '#2F3035'}
            stroke={activeGrid ? '#ffc42e' : '#2F3035'}
            strokeWidth="2"
          />
          <rect
            x="14"
            y="6"
            width="2"
            height="2"
            fill={activeGrid ? '#ffc42e' : '#2F3035'}
            stroke={activeGrid ? '#ffc42e' : '#2F3035'}
            strokeWidth="2"
          />
          <rect
            x="14"
            y="13"
            width="2"
            height="2"
            fill={activeGrid ? '#ffc42e' : '#2F3035'}
            stroke={activeGrid ? '#ffc42e' : '#2F3035'}
            strokeWidth="2"
          />
        </svg>
      </button>
      <button className="top-filter__btnline" onClick={changeView}>
        <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="1">
            <rect x="6" width="19" height="3" rx="1.5" fill={!activeGrid ? '#ffc42e' : '#2F3035'} />
            <rect x="6" y="8" width="19" height="3" rx="1.5" fill={!activeGrid ? '#ffc42e' : '#2F3035'} />
            <rect x="6" y="16" width="19" height="3" rx="1.5" fill={!activeGrid ? '#ffc42e' : '#2F3035'} />
            <rect width="3" height="3" rx="1.5" fill={!activeGrid ? '#ffc42e' : '#2F3035'} />
            <rect y="8" width="3" height="3" rx="1.5" fill={!activeGrid ? '#ffc42e' : '#2F3035'} />
            <rect y="16" width="3" height="3" rx="1.5" fill={!activeGrid ? '#ffc42e' : '#2F3035'} />
          </g>
        </svg>
      </button>
    </div>
  )
}

export default TopFolterProductView
