import React, { useContext, useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { AuthContext } from '../../../Contexts/AuthContext';
import { find } from '../../../Services/Service';
import Category from '../../../Models/Category';
import CardCategories from '../CardCategories/CardCategories';
import { toastAlerta } from '../../../utils/toastAlerta';
import Popup from 'reactjs-popup';
import FormLogin from '../../Login/FormLogin/FormLogin';

function ListCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal

  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  useEffect(() => {
    // Verifica se o token está presente para determinar se o modal deve ser exibido
    if (!token) {
      setShowModal(true);
    } else {
      findCategories();
    }
  }, [token]);

  async function findCategories() {
    try {
      await find('categories', setCategories, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
        handleLogout();
      }
    }
  }

  // Função para fechar o modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        {categories.length === 0 && (
          <ColorRing
            visible={true}
            height="300"
            width="300"
            colors={['#FF3232', '#FF5A5A', '#d5e4f5', '#8399E8', '#4D73FD']}
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
          />
        )}
      </div>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CardCategories key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
      {/* Modal de Login */}
      <Popup
        open={showModal}
        onClose={closeModal}
        modal
        closeOnDocumentClick={false}
        overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }}
        contentStyle={{ borderRadius: '1rem', width: 'auto', padding: '2rem' }}
      >
        <div>
          <FormLogin closeModal={closeModal} />
        </div>
      </Popup>
    </>
  );
}

export default ListCategories;
