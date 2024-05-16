import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Category from '../../../Models/Category'
import { AuthContext } from '../../../Contexts/AuthContext'
import { TERipple } from 'tw-elements-react';

interface CardCategoryProps {
  category: Category
}


function CardCategories({category}: CardCategoryProps) {

  const { user } = useContext(AuthContext)
  return (
    <div
        className="block rounded-lg bg-indigo-800 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-bg-indigo-800">
        
        <div
          className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 font-extrabold text-2xl">
          Categoria
        </div>
        <div className='bg-escuro-dark-pastel-blue'>
        <div className="p-6">
          
        <h5
            className="mb-2 text-xl font-large leading-tight text-neutral-800 dark:text-neutral-50 font-bold">
            {category.name}
          </h5>
          </div>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 truncate">
          {category.description}
          </p>
          
      {user.id === 1 ? 
        <Link to={`/editCategory/${category.id}`} className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
          <button>Editar</button>
        </Link> :  <Link to={`/category/${category.id}`} className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white ]'>
          <button>Versão completa</button>
        </Link>
        }
        {user.id === 1 ?
        <Link to={`/deleteCategory/${category.id}`} className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
          <button>Deletar</button>
        </Link>  : null }
        
      </div> </div>
    
  )
}

export default CardCategories