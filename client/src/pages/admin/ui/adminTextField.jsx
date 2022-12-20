import React from 'react';

const AdminTextField = ({label, name, value, onChange}) => {
  return ( 
    <div className="admin-edit-form__control">
    <label className="admin-edit-form__label" htmlFor={name}>
      {label}
    </label>
    <input
      className="admin-edit-form__input"
      type="text"
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    />
  </div>
   );
}
 
export default AdminTextField;