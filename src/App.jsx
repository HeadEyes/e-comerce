import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { NavBar } from './components/navBar/NavBar.jsx'
import { Home } from './pages/Home/Home.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { ProductList } from './pages/ProductList/ProductList.jsx';
import { ProductPage } from './pages/ProductPage/ProductPage.jsx';
import { FiltersProvider } from './context/filterContext.jsx';
import { CartProvider } from './context/cartContext.jsx';
import { Contact } from './pages/Contact/Contact.jsx';

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element:
            <FiltersProvider>
              <ProductList />
            </FiltersProvider>
        },
        {
          path: "/product/:id",
          element: <ProductPage />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "*",
          element: <h1>Not Found</h1>,
        },
      ],
    },
  ]);

  return (

    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
