import './App.css'
import Home from './Pages/Home/Home';
import Sobre from './Pages/About/About';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {


  return (
    <>
          <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />}/>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
