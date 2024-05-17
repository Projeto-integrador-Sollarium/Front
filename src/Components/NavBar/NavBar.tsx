import { Link } from 'react-router-dom'
import React from 'react'
import { useContext } from 'react'
import jorge from '../../assets/Jorge.png';
import sol from '../../assets/solll.svg'
import { ShoppingCart, User } from '@phosphor-icons/react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../Contexts/AuthContext';
import ModalProducts from '../Products/ModalProducts/ModalProducts';

function Navbar() {

  let navigate = useNavigate()

  const { user, handleLogout } = useContext(AuthContext)

  const { itemsQuantity } = useContext(AuthContext)

  function onClickCart() {
    navigate('/home')
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
                      <Link to='/registerCategory' className='bg-blue-950 hover:bg-dark-pastel-blue text-white font-bold py-6 px-4 rounded'>Cadastrar Categoria</Link>
                      <ModalProducts />
                  </>
              )}

              {user.id !== 0 && (
                  <div className='relative bg-blue-950 hover:bg-dark-pastel-blue rounded py-6 px-1'>
                      <Link to='/cart' className='text-white font-bold'> 
                          <span className="absolute top-0 right-0 mt-3 -mr-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">{itemsQuantity}</span>  
                          <ShoppingCart size={28} color="white" weight="bold" onClick={onClickCart} />
                      </Link>
                  </div>
              )}
              
              {user.id === 0 ? (
                  <Link to='/login' className='bg-blue-950 hover:bg-dark-pastel-blue text-white font-bold py-6 px-4 rounded'>Login</Link>
              ) : (
                  <div className='bg-blue-950 hover:bg-dark-pastel-blue text-white font-bold py-6 px-4 rounded' onClick={handleLogout}>Logout</div>
              )}
          </div>
        </div>
      </div>



    </>
  )
}

export default Navbar