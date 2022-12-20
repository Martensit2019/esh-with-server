import React from 'react';

const AdminTextArea = ({label, name, value, onChange}) => {
  return ( 
    <div className="admin-edit-form__control">
    <label className="admin-edit-form__label" htmlFor={name}>
      {label}
    </label>
    <textarea
      className="admin-edit-form__textarea"
      type="text"
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    />
  </div>
   );
}
 
export default AdminTextArea;