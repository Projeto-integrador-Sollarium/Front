import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import UserLogin from '../../../Models/UserLogin';
import { AuthContext } from '../../../Contexts/AuthContext';

interface LoginProps {
  closeModal: () => void;
}

function Login({ closeModal }: LoginProps) {
  let navigate = useNavigate();
  let location = useLocation();

  const [userLogin, setUserLogin] = useState<UserLogin>({} as UserLogin);

  const { user, handleLogin } = useContext(AuthContext);
  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (user.token !== '') {
      navigate('/home');
    }
  }, [user]);

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(userLogin);
    closeModal(); // Fechando o modal ao concluir o login
  }

  return (
    <form onSubmit={login} className="flex flex-col items-center justify-center h-full">
      <h2 className="text-gray-800 text-4xl mb-4">Entrar</h2>
      <div className="flex flex-col w-full max-w-md gap-4 p-8 bg-white shadow-md rounded-lg">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="border border-gray-300 rounded p-2"
            value={userLogin.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-700">
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            className="border border-gray-300 rounded p-2"
            value={userLogin.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300">
          {isLoading ? (
            <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
          ) : (
            'Entrar'
          )}
        </button>
        <hr className="my-4 border-gray-300" />
        <p className="text-gray-700">
          Ainda não tem uma conta?{' '}
          <Link to="/Register" className="text-blue-500 hover:underline">
            Cadastre-se
          </Link>
        </p>
        {location.pathname === '/Categories' && ( // Condição para renderizar o botão apenas na página /categories
          <div className="flex justify-center">
            {/* Adicionando um botão para voltar para a página inicial */}
            <button onClick={() => navigate('/')} className="bg-gray-200 text-gray-800 rounded-md py-2 px-4 mt-2 hover:bg-gray-300 transition duration-300">
              Voltar
            </button>
          </div>
        )}
      </div>
    </form>
  );
}

export default Login;
