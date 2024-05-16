import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Category from '../../../Models/Category'
import { AuthContext } from '../../../Contexts/AuthContext'


interface CardCategoryProps {
  category: Category
}


function CardCategories({category}: CardCategoryProps) {

  const { user } = useContext(AuthContext)
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>{category.name}</header>
      <p className='p-8 text-3xl bg-slate-200 h-full truncate'>{category.description}</p>
      <div className="flex">
      {user.id === 1 ? 
        <Link to={`/editCategory/${category.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link> : <Link to={`/category/${category.id}`} className='w-full text-slate-100 bg-green-400 hover:bg-green-700 flex items-center justify-center py-2'>
          <button>Versão completa</button>
        </Link>
        }
        {user.id === 1 ?
        <Link to={`/deleteCategory/${category.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>  : null }
      </div>
    </div>
  )
}

export default CardCategories