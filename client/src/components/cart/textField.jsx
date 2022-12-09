import React from 'react'
const TextField = ({ type = 'text', placeholder, value, name, error, onChange }) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const getClasses = () => {
    return 'order-input' + (error ? ' order-input--error' : '')
  }
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }
  return (
    <div className="order-form__control">
      <input type={showPassword ? 'text' : type} className={getClasses()} placeholder={placeholder} value={value} name={name} onChange={onChange} />
      {type === 'password' && (
        <button type='button' className="input-show" onClick={toggleShowPassword}>
          {error?<img src={`/images/icons/${showPassword ? 'show' : 'hide'}-pass-err.svg`} alt="" />:<img src={`/images/icons/${showPassword ? 'show' : 'hide'}-pass.svg`} alt="" />}
        </button>
      )}
      {error && <p className="order-form__error">{error}</p>}
    </div>
  )
}

export default TextField
