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
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria?</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-blue-500 text-white font-bold text-2xl'>{category.name}</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{category.description}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={turnBack}>Não</button>
                    <button className='w-full text-slate-100 bg-blue-600 hover:bg-blue-900 flex items-center justify-center' onClick={deleteCategory}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteCategory