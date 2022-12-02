import React from 'react';
const AdminLayout = ({children}) => {
  return ( 
    <div className="admin" style={{ height: '100vh', border: '1px solid red'}}>
        <div className="admin__wrapper" style={{ display: 'flex'}}>
          <div className="admin-sidebar" style={{border: '1px solid', width: '100px'}}>
            <ul>
              <li>Товары</li>
              <li>Категории</li>
              <li>Заказы</li>
              <li>Покупатели</li>
            </ul>
          </div>
        <div className="admin-main" style={{ width: '100%', border: '1px solid green'}}>main {children} </div>
        </div>
      
    </div>
   );
}
 
export default AdminLayout;