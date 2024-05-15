import { Link } from 'react-router-dom'
import React from 'react'
import { useContext } from 'react'
import jorge from '../../assets/Jorge.png';
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
      <div className='w-full bg-escuro-dark-pastel-blue text-white flex justify-center py-4'>
        <div className="container flex items-center justify-between text-lg">
          <div className="flex items-center gap-2">
            <img src={jorge} alt="" className='w-12 h-12' />
            <Link to='/home' className='text-2xl font-bold uppercase text-white'>Sollarium</Link>
          </div>

          <div className='flex gap-6'>
            <Link to='/products' className='bg-escuro-dark-pastel-blue hover:bg-dark-pastel-blue text-white font-bold py-6 px-4 rounded-l'>Produtos</Link>
            <Link to='/Categories' className='bg-escuro-dark-pastel-blue hover:bg-dark-pastel-blue text-white font-bold py-6 px-4 rounded-l'>Categorias</Link>
            <Link to='/sobre' className='bg-escuro-dark-pastel-blue hover:bg-dark-pastel-blue text-white font-bold py-6 px-5 rounded-l'>Sobre</Link>
            {user.id === 1 ? <Link to='/registerCategory' className='bg-escuro-dark-pastel-blue hover:bg-dark-pastel-blue text-white font-bold py-6 px-4 rounded-l' >Cadastrar Categoria</Link> : null}
            {user.id === 1 ? < ModalProducts /> : null}
            {user.id !== 0 ?
              <Link to='/cart' className='bg-escuro-dark-pastel-blue hover:bg-dark-pastel-blue text-white font-bold py-2 px-4 rounded-l'> 
                [{itemsQuantity}] <ShoppingCart size={28} color="white" weight="bold" onClick={onClickCart} />
              </Link> : null}

            {user.id === 0 ? <Link to='/login' className='bg-escuro-dark-pastel-blue hover:bg-dark-pastel-blue text-white font-bold py-6 px-4 rounded-l'>Login</Link> : <div className='bg-escuro-dark-pastel-blue hover:bg-dark-pastel-blue text-white font-bold py-6 px-4 rounded-l' onClick={handleLogout}>Logout</div>}

          </div>
        </div>
      </div>



    </>
  )
}

export default Navbar