import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs'
import Pagination from '../components/pagination/pagination'
import ProductsList from '../components/products/productsList'
import TopFilter from '../components/topFilter/topFilter'
import Loader from '../components/ui/loader'
import { getCurrentPage, getProductsPerPage, getSelectedSort, setCurrentPage } from '../store/filter'
import { getProducts, getProductsLoading, getTotalProducts, loadProductsByType } from '../store/products'

const Boys = () => {
  const dispatch = useDispatch()

  const products = useSelector(getProducts())
  const isProductsLoading = useSelector(getProductsLoading())
  const pageSize = useSelector(getProductsPerPage())
  const selectedSort = useSelector(getSelectedSort())
  const currentPage = useSelector(getCurrentPage())
  const totalProducts = useSelector(getTotalProducts())

  React.useEffect(() => {
    const sort = selectedSort.value !== 'default' ? `_sort=${selectedSort.value.replace('-', '')}&` : ''
    const order = selectedSort.value.includes('-') ? '_order=desc&' : ''
    dispatch(loadProductsByType('dlya-malchikov', sort, order, currentPage, pageSize))
  }, [selectedSort, currentPage, pageSize])

  return (
    <div className="category-page">
      <div className="container">
        <div style={{ width: '100%' }}>
          <Breadcrumbs list={['Каталог', 'Для мальчиков']} />
          <h1>Каталог конструкторов LEGO для мальчиков</h1>
          <TopFilter />
          {!isProductsLoading ? (
            <>
              <ProductsList products={products} />
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={totalProducts}
                pageSize={pageSize}
                onPageChange={(page) => dispatch(setCurrentPage(page))}
              />
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  )
}

export default Boys
