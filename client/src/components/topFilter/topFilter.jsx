import React from 'react'
// import './top-filter.scss'
import TopFilterSort from './topFilterSort'
import TopFilterPageSize from './topFilterPageSize'
import TopFolterProductView from './topFilterProductView'

const TopFilter = () => {

  return (
    <div className="top-filter">
      <TopFilterSort />
      <div className="top-filter__btns">
        <TopFilterPageSize />
        <TopFolterProductView />
      </div>
    </div>
  )
}

export default TopFilter
