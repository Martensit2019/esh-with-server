import React, { useState, useCallback, useEffect, useRef } from 'react'
import axios from 'axios'
import MultiRange from './multiRange'
import { useSelector } from 'react-redux'
import Burger from '../header/burger'

const Sidebar = () => {
  // return null
  const isOpen = useSelector((state) => state.filter.isOpenSidebar)
  // const [minPrice, setMinPrice] = useState(0)
  // const [minPieces, setMinPieces] = useState(0)
  // const [minMinifigs, setMinMinifigs] = useState(0)
  // const [minYear, setMinYear] = useState(0)
  // const [maxPrice, setMaxPrice] = useState(0)
  // const [maxPieces, setMaxPieces] = useState(0)
  // const [maxMinifigs, setMaxMinifigs] = useState(0)
  // const [maxYear, setMaxYear] = useState(0)
  // const [isLoadingMinPrice, setLoadingMinPrice] = useState(true)
  // const [isLoadingMaxPrice, setLoadingMaxPrice] = useState(true)
  // const [isLoadingMinPieces, setLoadingMinPieces] = useState(true)
  // const [isLoadingMaxPieces, setLoadingMaxPieces] = useState(true)
  // const [isLoadingMinMinifigs, setLoadingMinMinifigs] = useState(true)
  // const [isLoadingMaxMinifigs, setLoadingMaxMinifigs] = useState(true)
  // const [isLoadingMinYear, setLoadingMinYear] = useState(true)
  // const [isLoadingMaxYear, setLoadingMaxYear] = useState(true)

  // useEffect(() => {
  //   // получаем MAX цену
  //   axios.get(`http://localhost:3001/products?_sort=price&_order=desc&_start=0&_limit=1`).then((res) => {
  //     setMaxPrice(parseInt(res.data[0].price))
  //   })
  //   // получаем MAX количество деталей
  //   axios.get(`http://localhost:3001/products?_sort=pieces&_order=desc&_start=0&_limit=1`).then((res) => {
  //     setMaxPieces(parseInt(res.data[0].pieces))
  //   })
  //   // получаем MAX количество минифигурок
  //   axios.get(`http://localhost:3001/products?_sort=minifigs&_order=desc&_start=0&_limit=1`).then((res) => {
  //     setMaxMinifigs(parseInt(res.data[0].minifigs))
  //   })
  //   // получаем MAX год
  //   axios.get(`http://localhost:3001/products?_sort=year&_order=desc&_start=0&_limit=1`).then((res) => {
  //     setMaxYear(parseInt(res.data[0].year))
  //   })
  //   // получаем MIN цену
  //   axios.get(`http://localhost:3001/products?_sort=price&_start=0&_limit=1`).then((res) => {
  //     setMinPrice(parseInt(res.data[0].pieces))
  //   })
  //   // получаем MIN количество деталей
  //   axios.get(`http://localhost:3001/products?_sort=pieces&_start=0&_limit=1`).then((res) => {
  //     setMinPieces(parseInt(res.data[0].pieces))
  //   })
  //   // получаем MIN количество минифигурок
  //   axios.get(`http://localhost:3001/products?_sort=minifigs&_start=0&_limit=1`).then((res) => {
  //     setMinMinifigs(parseInt(res.data[0].minifigs))
  //   })
  //   // получаем MIN год
  //   axios.get(`http://localhost:3001/products?_sort=year&_start=0&_limit=1`).then((res) => {
  //     setMinYear(parseInt(res.data[0].year))
  //   })
  // }, [])

  // useEffect(() => {
  //   if (minPrice) {
  //     setLoadingMinPrice(false)
  //   }
  //   if (maxPrice) {
  //     setLoadingMaxPrice(false)
  //   }
  //   if (minPieces) {
  //     setLoadingMinPieces(false)
  //   }
  //   if (maxPieces) {
  //     setLoadingMaxPieces(false)
  //   }
  //   if (minMinifigs) {
  //     setLoadingMinMinifigs(false)
  //   }
  //   if (maxPrice) {
  //     setLoadingMaxMinifigs(false)
  //   }
  //   if (minYear) {
  //     setLoadingMinYear(false)
  //   }
  //   if (maxYear) {
  //     setLoadingMaxYear(false)
  //   }
  // }, [minPrice, minPieces, minMinifigs, minYear, maxPrice, maxPieces, maxMinifigs, maxYear])

  return (

    <div className={'sidebar' + (isOpen ? ' open' : '')}>
      <div className="sidebar__top">
        <div className="sidebar__burger"><Burger /></div>
        
      </div>
      {/* <div className="sidebar-form__wrapper">
        <form>
          {!isLoadingMinPrice && !isLoadingMaxPrice && <MultiRange label="Цена, руб." min={minPrice} max={maxPrice} />}
          {isLoadingMinPieces !== null && !isLoadingMaxPieces && <MultiRange label="Количество деталей, шт." min={minPieces} max={maxPieces} />}
          {minMinifigs!==null && !isLoadingMaxMinifigs && <MultiRange label="Количество минифигурок, шт." min={minMinifigs} max={maxMinifigs} />}
          {!isLoadingMinYear && !isLoadingMaxYear && <MultiRange label="Год выпуска" min={minYear} max={maxYear} />}

          <MultiRange label='Цена, руб.' min={minPrice} max={maxPrice} />
          <MultiRange label='Количество деталей, шт.' min={minPieces} max={maxPieces} />
          <MultiRange label='Количество минифигурок, шт.' min={minMinifigs} max={maxMinifigs} />
          <MultiRange label='Год выпуска' min={minYear} max={maxYear} />

          <button type='button' className="sidebar-form__btn">Применить фильтр</button>
        </form>
      </div> */}
    </div>
  )
}

export default Sidebar
