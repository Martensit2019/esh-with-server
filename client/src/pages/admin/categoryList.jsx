import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AdminTableHeader from '../../components/admin/adminTableHeader'
import AdminTableItem from '../../components/admin/adminTableItem'
import { getCategories, getCategoriesLoading, loadCategories } from '../../store/categories'

const titles = ['Фото', 'Наименование', 'Активность']

const AdminCategoryList = () => {
  const dispatch = useDispatch()
  const categories = useSelector(getCategories())
  const isLoading = useSelector(getCategoriesLoading())

  React.useEffect(() => {
    dispatch(loadCategories())
  }, [])
  return (
     <div className="admin-category">
       <div className="admin-category__header">
         <h2 className="admin-category__title">Серии</h2>
         <Link to="/admin/category/create" role="button" className="admin__btn">
           Добавить серию
         </Link>
       </div>

       {!isLoading ? (
         <div className="basket">
           <div className="basket__inner" style={{'minWidth': '620px'}}>
             <AdminTableHeader titles={titles} />
             {categories.map((item) => (
               <AdminTableItem item={item} key={item.id} />
             ))}
           </div>
         </div>
       ):(<h1>Loading...</h1>)}
     </div>
    
     );
}
 
export default AdminCategoryList;