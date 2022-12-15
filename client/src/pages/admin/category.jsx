import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminCategory = () => {
  return (
    <>
      <Outlet />
    </>

    // <div className="admin-category">
    //   <div className="admin-category__header">
    //     <h2 className="admin-category__title">Серии</h2>
    //     <Link to="/" role="button" class="admin__btn">
    //       Добавить серию
    //     </Link>
    //   </div>

    //   {!isLoading && (
    //     <div className="basket">
    //       <div className="basket__inner" style={{'min-width': '620px'}}>
    //         <AdminTableHeader titles={titles} />
    //         {categories.map((item) => (
    //           <AdminTableItem item={item} key={item.id} />
    //         ))}
    //       </div>
    //     </div>
    //   )}
    // </div>
  )
}

export default AdminCategory
