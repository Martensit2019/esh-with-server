import React from 'react'
import Pagination from '../components/pagination/pagination'
// import { useLocation } from 'react-router-dom'
// import queryString from 'query-string'
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs'
import TopFilter from '../components/topFilter/topFilter'
import ProductsList from '../components/products/productsList'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentPage, getProductsPerPage, getSelectedSort, setCurrentPage } from '../store/filter'
import { getProducts, getProductsLoading, getTotalProducts, loadAllProducts } from '../store/products'
import Loader from '../components/ui/loader'

const Catalog = () => {
  const dispatch = useDispatch()
  const products = useSelector(getProducts())
  const isLoading = useSelector(getProductsLoading())
  // console.log('useLocation->', useLocation())
  // const { search } = useLocation()

  const pageSize = useSelector(getProductsPerPage())
  const selectedSort = useSelector(getSelectedSort())
  const currentPage = useSelector(getCurrentPage())
  // const totalProducts = 100
  const totalProducts = useSelector(getTotalProducts())


  // useEffect(() => {
  //   if (search) {
  //     const { page } = queryString.parse(search)
  //     setCurrentPage(Number(page))
  //   }
  // }, [])

  // _sort=price  - цена по возрастанию 0->100
  // _sort=price&_order=desc  - цена по убыванию 100->0

  // _sort=title  - название по возрастанию 0->100

  // -------------------
  React.useEffect(() => {
    const sort = selectedSort.value !== 'default' ? `_sort=${selectedSort.value.replace('-', '')}&` : ''
    const order = selectedSort.value.includes('-') ? '_order=desc&' : ''
    dispatch(loadAllProducts(sort, order, currentPage, pageSize))
  }, [selectedSort, currentPage, pageSize])

  return (
    <div className="catalog-page">
      <div className="container">
        <div style={{ width: '100%' }}>
          <Breadcrumbs list={['Каталог']} />
          <h1 className="title-general">Каталог конструкторов LEGO для детей</h1>
          <TopFilter />
          {!isLoading ? <ProductsList products={products} />:<Loader />}
          
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={totalProducts}
            pageSize={pageSize}
            onPageChange={(page) => dispatch(setCurrentPage(page))}
          />
        </div>
      </div>
    </div>
  )
}

export default Catalog
