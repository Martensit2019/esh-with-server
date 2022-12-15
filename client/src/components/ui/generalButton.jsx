import React from 'react';
import { Link } from 'react-router-dom';

const GeneralButton = ({link, title}) => {
  return ( 
    <Link to={link} type="button" className="admin__btn">{title}</Link>
   );
}
 
export default GeneralButton;