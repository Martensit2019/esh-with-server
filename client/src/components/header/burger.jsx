import React from 'react'
import { toggleSidebar } from '../../store/filter'
import { useDispatch, useSelector } from 'react-redux'

const Burger = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state) => state.filter.isOpenSidebar)
  
  return ( 
    <div className={'burger ' + (isOpen ? 'prev' : '')} onClick={() => dispatch(toggleSidebar())}>
    <div className="bar top"></div>
    <div className="bar middle"></div>
    <div className="bar bottom"></div>
  </div>
   );
}
 
export default Burger;