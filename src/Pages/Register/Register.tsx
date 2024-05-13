import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import User from '../../Models/User'
import { registerUser } from '../../Services/Service'
import './Register.css'

function Register() {

  let navigate = useNavigate()

  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    photo: ""
  })

  const [userResponse, setUserResponse] = useState<User>({
    id: 0,
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    photo: ""
  })

  useEffect(() => {
    if (userResponse.id !== 0) {
      back()
    }
  }, [userResponse])

  function back() {
    navigate('/login')
  }

  function handleConfirmPassword(e: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value)
  }

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  async function registerNewUser(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmPassword === user.password && user.password.length >= 8) {

      try {
        await registerUser(`/users/register`, user, setUserResponse)
        alert('Usuário cadastrado com sucesso')

      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUser({ ...user, password: "" }) // Reinicia o campo de Senha
      setConfirmPassword("")                  // Reinicia o campo de Confirmar Senha
    }
  }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
            <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={registerNewUser}>
                <h2 className="text-slate-900 text-5x1">Cadastre-se</h2>
                <div className="flex flex-col w-full">
                    <label htmlFor="email">Nome</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="border-2 border-slate-700 rounded p-2"
                        value={user.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="border-2 border-slate-700 rounded p-2"
                        value={user.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="user">Senha</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="border-2 border-slate-700 rounded p-2"
                        value={user.password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="user">Confirmar senha</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirmar senha"
                        className="border-2 border-slate-700 rounded p-2"
                        value={confirmPassword}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmPassword(e)}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="address">Endereço</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="address"
                        className="border-2 border-slate-700 rounded p-2"
                        value={user.address}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="phone">Telefone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        className="border-2 border-slate-700 rounded p-2"
                        value={user.phone}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="photo">Foto</label>
                    <input
                        type="text"
                        id="photo"
                        name="photo"
                        placeholder="Photo"
                        className="border-2 border-slate-700 rounded p-2"
                        value={user.photo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    />
                </div>
                <div className="flex justify-around w-full gap-8">
                    <button type='submit' className="rounded bg-cyan-500 hover:bg-cyan-900 text-white w-1/2 py-2 flex justify-center">
                        <span>Cadastrar</span>
                    </button>

                    <button type='reset' className="rounded bg-red-400 hover:bg-red-500 text-white w-1/2 py-2 flex justify-center">
                        <span>Resetar</span>
                    </button>


                </div>

            </form>
        </div>
    )
}

export default Register;