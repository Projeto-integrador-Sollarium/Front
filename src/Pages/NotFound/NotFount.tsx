import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Página Não Encontrada</h1>
      <p className="text-lg text-center mb-8">A página que você está procurando não foi encontrada ou ainda não há conteúdo disponível para ela..</p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Voltar para a página inicial
      </Link>
    </div>
  );
}

export default NotFound;
