import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { ShoppingCart, User } from '@phosphor-icons/react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../Contexts/AuthContext'
import ModalProducts from '../Products/ModalProducts/ModalProducts'
import ModalCategories from '../Categorias/ModalCategories/ModalCategories'
import FormLogin from '../Login/FormLogin/FormLogin'
import Popup from 'reactjs-popup'
import jorge from '../../assets/Jorge.png';
import sol from '../../assets/solcomluz2.svg';

function Navbar() {
  const navigate = useNavigate()
  const { user, handleLogout, itemsQuantity } = useContext(AuthContext)
  const [openLoginModal, setOpenLoginModal] = useState(false)

  const onClickCart = () => {
    navigate('/home')
  }

  const handleUserIconClick = () => {
    if (user.id === 0) {
      setOpenLoginModal(true)
    } else {
      handleLogout()
    }
  }

  return (
    <>
      <div className='w-full bg-blue-950 text-white flex justify-center py-4'>
        <div className="container flex items-center justify-between text-lg">
          <div className="flex items-center gap-2">
            <img src={sol} alt="" className='w-24 h-20' />
            <Link to='/home' className='text-2xl font-bold uppercase text-white'>Sollarium</Link>
          </div>

          <div className='flex gap-6'>
              <Link to='/products' className='bg-blue-950 hover:bg-dark-pastel-blue text-white font-bold py-6 px-4 rounded'>Produtos</Link>
              <Link to='/Categories' className='bg-blue-950 hover:bg-dark-pastel-blue text-white font-bold py-6 px-4 rounded'>Categorias</Link>
              <Link to='/sobre' className='bg-blue-950 hover:bg-dark-pastel-blue text-white font-bold py-6 px-5 rounded'>Sobre</Link>
              
              {user.id === 1 && (
                  <>
                      <ModalCategories />
                      <ModalProducts />
                  </>
              )}

              {user.id !== 0 && (
                  <div className='w-18 h-18 relative  bg-blue-950 hover:bg-dark-pastel-blue rounded py-6 px-3'>
                      <Link to='/cart' className='text-white font-bold'> 
                          <span className="absolute top-0 right-0 mt-3 mr-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">{itemsQuantity}</span>  
                          <ShoppingCart size={28} color="white" weight="bold" onClick={onClickCart} />
                      </Link>
                  </div>
              )}
              
              <div className='relative flex items-center justify-center'>
                  <User 
                    size={28} 
                    color='white' 
                    weight='bold' 
                    className='cursor-pointer' 
                    onClick={handleUserIconClick}
                    onMouseEnter={() => document.getElementById('authButton').classList.remove('hidden')}
                    onMouseLeave={() => document.getElementById('authButton').classList.add('hidden')}
                  />
                  <button
                      id="authButton"
                      className='absolute top-0 left-0 bg-dark-pastel-blue text-black font-bold py-2 px-4 rounded hidden'
                      onMouseEnter={() => document.getElementById('authButton').classList.remove('hidden')}
                      onMouseLeave={() => document.getElementById('authButton').classList.add('hidden')}
                      onClick={handleUserIconClick}
                      >
                      {user.id === 0 ? (
                        <span>Log in</span>
                      ) : (
                          <div onClick={handleLogout}>Logout</div>
                      )}
                  </button>
                </div>
          </div>
        </div>
      </div>

      {/* Renderizar o Modal de Login */}
      <Popup
        open={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
        modal
        overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }}
        contentStyle={{ borderRadius: '1rem', width: 'auto', padding: '2rem' }}
      >
        <FormLogin closeModal={() => setOpenLoginModal(false)} />
      </Popup>
    </>
  )
}

export default Navbar
