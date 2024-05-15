import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../Contexts/AuthContext'
import Product from '../../../Models/Product'
import { find, remove } from '../../../Services/Service'
import { toastAlerta } from "../utils/toastAlerta"

function DeleteProduct() {
  const [product, setProduct] = useState<Product>({} as Product)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { user, handleLogout } = useContext(AuthContext)
  const token = user.token

  async function findProductByID(id: string) {
    try {
      await find(`/products/${id}`, setProduct, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findProductByID(id)
    }
  }, [id])

  function retornar() {
    navigate("/products")
  }

  async function deleteProduct() {
    try {
      await remove(`/products/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      toastAlerta('Produto apagado com sucesso')

    } catch (error) {
      toastAlerta('Erro ao apagar o Produto do Banco')
    }

    retornar()
  }
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar Produto?</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o produto a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Produto</header>
        <div className="p-4">
          <p className='text-xl h-full'>{product.name}</p>
          <p>{product.description}</p>
        </div>
        <div className="flex">
          <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
          <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deleteProduct}>
            Sim
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteProduct