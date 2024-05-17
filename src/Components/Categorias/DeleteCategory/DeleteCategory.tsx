import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../Contexts/AuthContext'

import { find, remove } from '../../../Services/Service'
import Category from '../../../Models/Category'
import { toastAlerta } from '../../../utils/toastAlerta'


function DeleteCategory() {
    const [category, setCategory] = useState<Category>({} as Category)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { user, handleLogout } = useContext(AuthContext)
    const token = user.token

    async function findByID(id: string) {
        try {
            await find(`/categories/${id}`, setCategory, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findByID(id)
        }
    }, [id])

    function turnBack() {
        navigate("/categories")
    }

    async function deleteCategory() {
        try {
            await remove(`/categories/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Categoria apagada com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar a Categoria', 'erro')
        }

        turnBack()
    }
    return (
        <div className="max-w-sm mx-auto my-4 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-500 text-center p-4">
            <h2 className="font-extrabold text-white text-2xl">Deletar Categoria?</h2>
            
          </div>
          <div className="bg-slate-100 p-6">
            <p className="mb-4 text-base text-neutral-800 truncate">{category.name}</p>
            <div className="flex justify-around mt-6">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={turnBack}>
                        Não
                    </button>
                    <button className='w-full text-slate-100 bg-green-500 hover:bg-green-600 flex items-center justify-center' onClick={deleteCategory}>
                        Sim
                    </button>
            </div>
          </div>
    </div>
    )
}

export default DeleteCategory