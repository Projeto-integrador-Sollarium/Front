import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Category from '../../../Models/Category';
import { AuthContext } from '../../../Contexts/AuthContext';
import FormCategories from '../FormCategories/FormCategories';

interface CardCategoryProps {
  category: Category;
}

function CardCategories({ category }: CardCategoryProps) {
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="max-w-sm mx-auto my-4 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-500 text-center p-4">
        <h2 className="font-extrabold text-white text-2xl">{category.name}</h2>
      </div>
      <div className="bg-slate-100 p-6">
        <p className="mb-4 text-base text-neutral-800 truncate">{category.description}</p>
        <div className="flex justify-around mt-4">
         
            <Link to={`/category/${category.id}`} className="inline-block rounded bg-blue-500 text-white px-4 py-2 hover:bg-blue-600">
              Versão completa
            </Link>
          
        </div>
      </div>

      {/* Modal de edição */}
      <Popup
        open={openModal}
        onClose={closeModal}
        modal
        closeOnDocumentClick={true}
        overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }}
        contentStyle={{ borderRadius: '1rem', paddingBottom: '2rem' }}
      >
        <div>
          <FormCategories closeModal={closeModal} initialCategory={category} />
        </div>
      </Popup>
    </div>
  );
}

export default CardCategories;
