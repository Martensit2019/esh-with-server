import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs'
import CategoryHeader from '../components/category/categoryHeader'
import Pagination from '../components/pagination/pagination'
import ProductsList from '../components/products/productsList'
import TopFilter from '../components/topFilter/topFilter'
import { getCategories, getCategoriesLoading, loadCategories } from '../store/categories'
import { getCurrentPage, getProductsPerPage, getSelectedSort, setCurrentPage } from '../store/filter'
import { getProducts, getProductsLoading, getTotalProducts, loadProductsByCategoryId } from '../store/products'

const CategoryPage = () => {
  const { slug } = useParams()
  console.log('slug', slug);
  const dispatch = useDispatch()
  const categories = useSelector(getCategories())
  const isCategoriesLoading = useSelector(getCategoriesLoading())
  const { id, title, imgName, descr } = !isCategoriesLoading ? categories.filter((c) => c.slug === slug)[0] : {}

  const products = useSelector(getProducts())
  const isProductsLoading = useSelector(getProductsLoading())
  const pageSize = useSelector(getProductsPerPage())
  const selectedSort = useSelector(getSelectedSort())
  const currentPage = useSelector(getCurrentPage())
  const totalProducts = useSelector(getTotalProducts())

  React.useEffect(() => {
    dispatch(loadCategories())
  }, [])
  React.useEffect(() => {
    const sort = selectedSort.value !== 'default' ? `_sort=${selectedSort.value.replace('-', '')}&` : ''
    const order = selectedSort.value.includes('-') ? '_order=desc&' : ''
    dispatch(loadProductsByCategoryId(id, sort, order, currentPage, pageSize))
  }, [id, selectedSort, currentPage, pageSize])

  return (
    <div className="category-page">
      <div className="container">
        {!isCategoriesLoading ? (
          <div style={{ width: '100%' }}>
            <Breadcrumbs list={['Каталог', title]} />
            <h1>Каталог конструкторов LEGO {title} для детей</h1>
            <CategoryHeader imgName={imgName} descr={descr} />
            <TopFilter />
            {!isProductsLoading && <ProductsList products={products} />}
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={totalProducts}
              pageSize={pageSize}
              onPageChange={(page) => dispatch(setCurrentPage(page))}
            />
          </div>
        ):<h1>Загрузка...</h1>}
      </div>
    </div>
  )
}

export default CategoryPage
