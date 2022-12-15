import React from 'react';
import { Link,  useLocation } from 'react-router-dom';

const AdminCategoryCreate = () => {
  const { pathname } = useLocation();
  return ( 
    <>
    <h1>Create</h1> 
    </>
  );
}
 
export default AdminCategoryCreate;