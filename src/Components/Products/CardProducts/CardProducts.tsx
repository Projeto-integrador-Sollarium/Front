import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Product from '../../../Models/Product'
import { AuthContext } from '../../../Contexts/AuthContext'

interface CardProductProps {
  product: Product
}

function CardProduct({ product }: CardProductProps) {
  const { addProduct, removeProduct, user } = useContext(AuthContext)

  return (
    <div className="max-w-sm overflow-hidden">
      <div className="px-6 py-4">
      <div className="flex justify-center items-center "><img src={product.photo} alt="Product Photo" /></div>
        <div className='text-center font-bold text-xl mb-2 hover:text-gray-700 font-sans'><Link to={`/product/${product.id}`}>{product.name}</Link></div>
        <div className="text-slate-500 text-xl"><p className='truncate'>{product.description}</p></div>
        <div className='text-2xl font-semibold text-center'><p>R${product.price}</p></div>
      </div>

      <div className="flex justify-center gap-3 px-6 pt-4 pb-2">


        {user.id === 1 ? <Link to={`/editProduct/${product.id}`} className='bg-dark-pastel-blue hover:bg-escuro-dark-pastel-blue text-white font-extrabold py-2 px-4 rounded'>
          <button>Editar</button>
        </Link> : <button className="bg-dark-pastel-blue hover:bg-escuro-dark-pastel-blue text-white font-extrabold py-2 px-4 rounded"
          onClick={() => addProduct(product)}>Adicionar</button> }
        
        {user.id === 1 ? <Link to={`/deleteProduct/${product.id}`} className='bg-vermelho-claro hover:bg-vermelho-escuro text-white font-extrabold py-2 px-4 rounded'>
          <button>Deletar</button>
        </Link> :
        <button className="bg-vermelho-claro hover:bg-vermelho-escuro text-white font-extrabold py-2 px-4 rounded"
          onClick={() => removeProduct(product.id)}>Remover</button>}
      </div>
    </div>







  )
}

export default CardProduct