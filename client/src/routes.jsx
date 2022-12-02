import AdminLayout from './layouts/AdminLayout'
import MainLayout from './layouts/MainLayout'
import AdminIndex from './pages/admin'
import Cart from './pages/cart'
import Catalog from './pages/catalog'
import CategoryPage from './pages/categoryPage'
import ComparePage from './pages/compare'
import Girls from './pages/dlya-devochek'
import Boys from './pages/dlya-malchikov'
import Baby from './pages/dlya-malyshey'
import Mans from './pages/dlya-vzroslyh'
import FavoritesPage from './pages/favorites'
import Main from './pages/main'
import Product from './pages/product'
import StatusOrder from './pages/statusorder'

const routes = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Main />
      </MainLayout>
    ),
  },
  {
    path: 'catalog',
    element: (
      <MainLayout>
        <Catalog />
      </MainLayout>
    ),
  },
  {
    path: 'dlya-malyshey',
    element: (
      <MainLayout>
        <Baby />
      </MainLayout>
    ),
  },
  {
    path: 'dlya-malchikov',
    element: (
      <MainLayout>
        <Boys />
      </MainLayout>
    ),
  },
  {
    path: 'dlya-devochek',
    element: (
      <MainLayout>
        <Girls />
      </MainLayout>
    ),
  },
  {
    path: 'dlya-vzroslyh',
    element: (
      <MainLayout>
        <Mans />
      </MainLayout>
    ),
  },
  {
    path: 'catalog/:slug',
    element: (
      <MainLayout>
        <CategoryPage />
      </MainLayout>
    ),
  },

  {
    path: 'product/:slug',
    element: (
      <MainLayout>
        <Product />
      </MainLayout>
    ),
  },
  {
    path: 'statusorder',
    element: (
      <MainLayout>
        <StatusOrder />
      </MainLayout>
    ),
  },
  {
    path: 'favourites',
    element: (
      <MainLayout>
        <FavoritesPage />
      </MainLayout>
    ),
  },
  {
    path: 'compare',
    element: (
      <MainLayout>
        <ComparePage />
      </MainLayout>
    ),
  },
  {
    path: 'cart',
    element: (
      <MainLayout>
        <Cart />
      </MainLayout>
    ),
  },
  // {
  //   path: 'profile',
  //   element: (
  //     <MainLayout>
  //       <Profile/>
  //     </MainLayout>
  //   ),
  // },

  {
    path: 'admin',
    element: (
      <AdminLayout>
        <AdminIndex />
      </AdminLayout>
    ),
  },
]

export default routes
