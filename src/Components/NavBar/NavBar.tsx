import { Link } from 'react-router-dom'
import React from 'react'
import jorge from '../../assets/Jorge.png';

function Navbar() {



  return (
    
    <>
      <div className='w-full bg-cyan-50 text-white flex justify-center py-4'>
  <div className="container flex items-center justify-between text-lg">
    <div className="flex items-center gap-2">
      <img src={jorge} alt="" className='w-12 h-12'/>
      <Link to='/home' className='text-2xl font-bold uppercase text-gray-800'>Sollarium</Link>
    </div>

    <div className='flex gap-6'>
      <Link to='/Categories' className='bg-cyan-50 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>Categorias</Link>
      <Link to='/sobre' className='bg-cyan-50 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>Sobre</Link>
      <Link to='/login' className='bg-cyan-50 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>Login</Link>
      <div className='bg-cyan-50 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>Produtos</div>
    </div>
  </div>
</div>



    </>
  )
}

export default Navbar