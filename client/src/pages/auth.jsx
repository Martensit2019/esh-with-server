import React from 'react';
import { useParams } from 'react-router-dom';

const Auth = () => {
  const par=useParams()
  console.log(par);
  return ( <h1>Auth</h1> );
}
 
export default Auth;