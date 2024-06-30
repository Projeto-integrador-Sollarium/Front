
import './App.css'
import Home from './Pages/Home/Home';
import Sobre from './Pages/About/About';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

import { AuthProvider } from './Contexts/AuthContext';

import ListCategories from './Components/Categorias/ListaCategorias/ListCategories';
import DeleteCategory from './Components/Categorias/DeleteCategory/DeleteCategory';
import ListProducts from './Components/Products/ListProducts/ListProducts';

import DeleteProduct from './Components/Products/DeleteProducts/DeleteProducts';
import Cart from './Pages/Cart/Cart';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductPage from './Pages/Product/Product';
import CategoryDescription from './Pages/CategoryDescription/CategoryDescription.tsx';
import NotFound from './Pages/NotFound/NotFount.tsx'
import background from './assets/lilypads.png'

function App() {



  return (
    <>
      
      <AuthProvider>
      <ToastContainer/>

        <BrowserRouter>
        <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'repeat' }}></div>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/categories" element={<ListCategories />} />

              <Route path="/deleteCategory/:id" element={<DeleteCategory />} />
              <Route path="/products" element={<ListProducts />} />

              <Route path="/deleteProduct/:id" element={<DeleteProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/category/:id" element={<CategoryDescription />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          
          <Footer />
        </BrowserRouter>
      </AuthProvider>
      
    </>
  )
}
export default App
