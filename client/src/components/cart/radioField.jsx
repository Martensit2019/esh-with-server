import React from 'react'

const RadioField = ({ options, classes, name, value, onChange }) => {
  return (
    // <>
    //   {options.map((option) => (
    //     <div className={classes} key={option.name + '_' + option.value}>
    //       <input
    //         type="radio"
    //         name={name}
    //         id={option.value}
    //         checked={option.value === value}
    //         value={option.value}
    //         onChange={onChange}
    //       />
    //       <label htmlFor={option.value}>{option.name}</label>
    //     </div>
    //   ))}
    // </>
    <>
      {options.map((option) => (
        <div className={classes} key={option.name + '_' + option.value}>
          <label className='radio-field__label'>
            <input
              type="radio"
              className='radio-field__real-radio'
              name={name}
              checked={option.value === value}
              value={option.value}
              onChange={onChange}
            />
            <span className="radio-field__custom-radio"></span>
            {option.name}
          </label>
        </div>
      ))}
    </>
  )
}

export default RadioField
