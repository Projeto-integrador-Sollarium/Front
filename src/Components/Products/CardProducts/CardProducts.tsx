import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../../../Models/Product';
import { AuthContext } from '../../../Contexts/AuthContext';
import Popup from 'reactjs-popup';
import FormProduct from '../FormProducts/FormProducts';
import FormLogin from '../../Login/FormLogin/FormLogin';
import { toastAlerta } from '../../../utils/toastAlerta';



interface CardProductProps {
  product: Product;
}

function CardProduct({ product }: CardProductProps) {
  const { addProduct, removeProduct, user } = useContext(AuthContext);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const closeEditModal = () => {
    setOpenEditModal(false);
  };

  const closeLoginModal = () => {
    setOpenLoginModal(false);
  };

  const handleAddProduct = () => {
    if (user.token) {
      addProduct(product);
    } else {
      toastAlerta('Você precisa estar logado', 'info');
      setOpenLoginModal(true);
    }
  };

  return (
    <div className="max-w-sm overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-2xl">
      <div className="px-6 py-4">
        <div className="flex justify-center items-center">
          <img src={product.photo} alt="Product Photo" className="object-cover h-48 w-full" />
        </div>
        <div className="text-center font-bold text-xl mb-2 hover:text-gray-700 font-sans">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </div>
        <div className="text-slate-500 text-xl">
          <p className="truncate">{product.description}</p>
        </div>
        <div className="text-2xl font-semibold text-center">
          <p>R${product.price}</p>
        </div>
      </div>

      <div className="flex justify-center gap-3 px-6 pt-4 pb-2">
        {user.id === 1 ? (
          <>
            <button
              onClick={() => setOpenEditModal(true)}
              className="bg-dark-pastel-blue hover:bg-escuro-dark-pastel-blue text-white font-extrabold py-2 px-4 rounded"
            >
              Editar
            </button>
            <Link to={`/deleteProduct/${product.id}`} className="bg-vermelho-claro hover:bg-vermelho-escuro text-white font-extrabold py-2 px-4 rounded">
              <button>Deletar</button>
            </Link>
          </>
        ) : (
          <>
            <button
              className="bg-dark-pastel-blue hover:bg-escuro-dark-pastel-blue text-white font-extrabold py-2 px-4 rounded"
              onClick={handleAddProduct}
            >
              Adicionar
            </button>
            <button
              className="bg-vermelho-claro hover:bg-vermelho-escuro text-white font-extrabold py-2 px-4 rounded"
              onClick={() => removeProduct(product.id)}
            >
              Remover
            </button>
          </>
        )}
      </div>

      <Popup open={openEditModal} onClose={closeEditModal} modal>
        <FormProduct closeModal={closeEditModal} initialProduct={product} />
      </Popup>

      <Popup
        open={openLoginModal}
        onClose={closeLoginModal}
        modal
        overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }}
        contentStyle={{ borderRadius: '1rem', width: 'auto', padding: '2rem' }}
      >
        <FormLogin closeModal={closeLoginModal} />
      </Popup>
    </div>
  );
}

export default CardProduct;