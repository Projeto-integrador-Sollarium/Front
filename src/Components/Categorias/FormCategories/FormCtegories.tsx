import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Category from '../../../Models/Category';
import { AuthContext } from '../../../Contexts/AuthContext';
import { find, update, register } from '../../../Services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';



function FormCategories() {
  const [category, setCategory] = useState<Category>({} as Category);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  async function findByiD(id: string) {
    await find(`/categories/${id}`, setCategory, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
        findByiD(id)
    }
  }, [id])

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(category))
  }

  async function createNewCategory(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await update(`/categories`, category, setCategory, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta('Categoria atualizada com sucesso', 'sucesso')
        turnBack()

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao atualizar a Categoria', 'erro')
        }

      }

    } else {
      try {
        await register(`/categories`, category, setCategory, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta('Categoria cadastrada com sucesso', 'sucesso')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrar Categoria', 'erro')
        }
      }
    }

    turnBack()
  }

  function turnBack() {
    navigate("/categories")
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token]);

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre uma nova Categoria' : 'Editar categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={createNewCategory}>
      <div className="flex flex-col gap-2">
          <label htmlFor="name">Nome da Categoria</label>
          <input
            type="text"
            placeholder="name"
            name='name'
            className="border-2 border-slate-700 rounded p-2"
            value={category.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="description"
            name='description'
            className="border-2 border-slate-700 rounded p-2"
            value={category.description}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormCategories;