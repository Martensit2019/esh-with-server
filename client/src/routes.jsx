import { Navigate } from 'react-router-dom'
import LoginForm from './components/loginForm'
import AdminLayout from './layouts/AdminLayout'
import MainLayout from './layouts/MainLayout'
import MainLayout1 from './layouts/MainLayout1'
import AdminIndex from './pages/admin'
import AdminCategory from './pages/admin/category'
import AdminCategoryCreate from './pages/admin/categoryCreate'
import AdminCategoryList from './pages/admin/categoryList'
import AdminCategorySlug from './pages/admin/categorySlug'
import AdminCategorySlugEdit from './pages/admin/categorySlugEdit'
import AdminCustomer from './pages/admin/customer'
import AdminOrder from './pages/admin/order'
import AdminProduct from './pages/admin/product'
import Cart from './pages/cart'
import Catalog from './pages/catalog'
import CategoryPage from './pages/categoryPage'
import ComparePage from './pages/compare'
import Girls from './pages/dlya-devochek'
import Boys from './pages/dlya-malchikov'
import Baby from './pages/dlya-malyshey'
import Mans from './pages/dlya-vzroslyh'
import FavoritesPage from './pages/favorites'
import Login from './pages/login'
import Main from './pages/main'
import Product from './pages/product'
import Profile from './pages/profile'
import StatusOrder from './pages/statusorder'

const routes = (role, location) => [
  {
    path: '/',
    element: <MainLayout1 />,
    children: [
      { path: '', element: <Main /> },
      {
        path: '/login',
        element: <Login />,
        children: [{ path: ':type', element: <Login /> }],
      },
      {
        path: '/profile',
        element: role !== null ? <Profile /> : <Navigate to="/login" state={{ referrer: location }} />,
        // element: <Profile />,
        children: [{ path: ':type', element: <Profile /> }],
      },
      { path: 'catalog', element: <Catalog /> },
      { path: 'catalog/:slug', element: <CategoryPage /> },
      { path: 'catalog/*', element: <Navigate to="/catalog" /> },
      { path: 'dlya-malyshey', element: <Baby /> },
      { path: 'dlya-malchikov', element: <Boys /> },
      { path: 'dlya-devochek', element: <Girls /> },
      { path: 'dlya-vzroslyh', element: <Mans /> },
      { path: 'statusorder', element: <StatusOrder /> },
      { path: 'favourites', element: <FavoritesPage /> },
      { path: 'compare', element: <ComparePage /> },
      { path: 'cart', element: <Cart /> },
      { path: 'product/:slug', element: <Product /> },
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
  // {
  //   path: 'catalog/:slug',
  //   element: (
  //     <MainLayout>
  //       <CategoryPage />
  //     </MainLayout>
  //   ),
  // },
  // {
  //   path: 'product/:slug',
  //   element: (
  //     <MainLayout>
  //       <Product />
  //     </MainLayout>
  //   ),
  // },
  {
    path: 'admin',
    element: role === 'admin' ? <AdminLayout /> : <Navigate to="/login" state={{ referrer: location }} />,
    children: [
      { path: '', element: <AdminIndex /> },
      { path: 'product', element: <AdminProduct /> },
      {
        path: 'category',
        element: <AdminCategory />,
        children: [
          { path: '', element: <AdminCategoryList /> },
          { path: ':slug', element: <AdminCategorySlug /> },
          { path: ':slug/edit', element: <AdminCategorySlugEdit /> },
          { path: 'create', element: <AdminCategoryCreate /> },
        ],
      },
      // { path: 'category', element: <AdminCategory /> },
      { path: 'order', element: <AdminOrder /> },
      { path: 'customer', element: <AdminCustomer /> },
      { path: '*', element: <Navigate to="/admin" /> },
    ],
  },
]

export default routes
