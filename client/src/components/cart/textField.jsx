import React from 'react'
const TextField = ({ type="text", placeholder, value, name, error, onChange }) => {
  return (
    <div className="order-form__control">
      <input type={type} className="order-input" placeholder={placeholder} value={value} name={name} onChange={onChange} />
      {error&&<p>{error}</p>}
    </div>
  )
}

export default TextField
