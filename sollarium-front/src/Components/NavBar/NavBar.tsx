import { Link } from 'react-router-dom'
import React from 'react'
import solarium from '../../assets/solarium.png';

function Navbar() {



  return (
    <>
      <div className='w-full bg-cyan-950 text-white flex justify-center py-4'>
  <div className="container flex items-center justify-between text-lg">
    <div className="flex items-center gap-2">
      <img src={solarium} alt="" className='w-10 h-10'/>
      <div className='text-2xl font-bold uppercase'>Sollarium</div>
    </div>

    <div className='flex gap-6'>
      <Link to='/home' className='hover:underline'>Home</Link>
      <Link to='/Contato' className='hover:underline'>Contato</Link>
      <Link to='/Sobre' className='hover:underline'>Sobre</Link>
      <div className='hover:underline'>Produtos</div>
      <div className='hover:underline'>Sobre</div>
      <div className='hover:underline'>Login</div>
    </div>
  </div>
</div>



    </>
  )
}

export default Navbar