import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../../../Models/Product'

interface CardProductProps {
  product: Product
}

function CardProduct({product}: CardProductProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img src={product.photo} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{product.name}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{product.description}</h4>
          <p>Categoria: {product.category?.name}</p>
          <p>Preço: {product.price}</p>

        </div>
      </div>
      <div className="flex">
      <Link to={`/editProduct/${product.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deleteProduct/${product.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduct