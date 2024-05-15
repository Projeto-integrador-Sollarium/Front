
import './App.css'
import Home from './Pages/Home/Home';
import Sobre from './Pages/About/About';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

import { AuthProvider } from './Contexts/AuthContext';

import FormCategories from './Components/Categorias/FormCategories/FormCtegories';
import ListCategories from './Components/Categorias/ListaCategorias/ListCategories';
import DeleteCategory from './Components/Categorias/DeleteCategory/DeleteCategory';
import ListProducts from './Components/Products/ListProducts/ListProducts';
import FormProduct from './Components/Products/FormProducts/FormProducts';
import DeleteProduct from './Components/Products/DeleteProducts/DeleteProducts';
import Cart from './Pages/Cart/Cart';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductPage from './Pages/Product/Product';



function App() {



  return (
    <>
      <AuthProvider>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
          />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/categories" element={<ListCategories />} />
              <Route path="/registerCategory" element={<FormCategories />} />
              <Route path="/editCategory/:id" element={<FormCategories />} />
              <Route path="/deleteCategory/:id" element={<DeleteCategory />} />
              <Route path="/products" element={<ListProducts />} />
              <Route path="/registerProduct/" element={<FormProduct />} />
              <Route path="/editProduct/:id" element={<FormProduct />} />
              <Route path="/deleteProduct/:id" element={<DeleteProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}
export default App
