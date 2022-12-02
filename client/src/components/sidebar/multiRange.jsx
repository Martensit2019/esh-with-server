import React, { useState, useCallback, useEffect, useRef } from 'react'

  const MultiRanger = ({label, min, max}) => {
    // console.log('minnn->', min);
    // console.log('maxx->', max);  

  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef(null)

    useEffect(()=>{
    setMinVal(min)
    setMaxVal(max)
  },[min, max])

  // Переводим в проценты
  const getPercent = useCallback((value) => Math.round(((value - min) / (max - min)) * 100), [min, max])

  // Устанавливаем ширину диапазона для уменьшения слева
  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent])

  // Устанавливаем ширину диапазона для уменьшения с правой стороны
  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent])

  // Получаем минимальное и максимальное значения при изменении их состояния
  // useEffect(() => {
  //   onChange({ min: minVal, max: maxVal });
  // }, [minVal, maxVal]);

  const handleMin = (e) => {
    // setMinValue(e.target.value)
  }
  const handleMax = (e) => {
    // setMaxValue(e.target.value)
  }

  return (
    <>
      <div className="sidebar-form__block">
        <div className="sidebar-form__title">{label}</div>
        <div className="sidebar-form__body">
          <div className="sidebar-form__inputs">
            <input
              className="sidebar-form__input"
              type="number"
              value={minVal}
              onChange={(event) => {
                const value = Math.min(Number(event.target.value), maxVal - 1)
                setMinVal(value)
                minValRef.current = value
              }}
            />
            <span> - </span>
            <input
              className="sidebar-form__input"
              type="number"
              value={maxVal}
              placeholder="от"
              onChange={(event) => {
                const value = Math.max(Number(event.target.value), minVal + 1)
                setMaxVal(value)
                maxValRef.current = value
              }}
            />
          </div>
          <div className="sidebar-form__rangers">
            <input
              className="thumb thumb--left"
              style={{ zIndex: minVal > max - 100 && '5' }}
              type="range"
              min={min}
              max={max}
              value={minVal}
              onChange={(event) => {
                const value = Math.min(Number(event.target.value), maxVal - 1)
                setMinVal(value)
                minValRef.current = value
              }}
            />
            <input
              className="thumb thumb--right"
              type="range"
              min={min}
              max={max}
              value={maxVal}
              onChange={(event) => {
                const value = Math.max(Number(event.target.value), minVal + 1)
                setMaxVal(value)
                maxValRef.current = value
              }}
            />
            <div className="slider">
              <div className="slider__track" />
              <div ref={range} className="slider__range" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MultiRanger
