import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home';
import Sobre from './Pages/About/About';
import Contato from './Pages/Contato/Contato';
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
              <Route path="/Home" element={<Home />} />
              <Route path="/Sobre" element={<Sobre />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />}/>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
