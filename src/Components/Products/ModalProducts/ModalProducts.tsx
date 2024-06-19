import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import FormProducts from '../FormProducts/FormProducts';

import './ModalProducts.css';

function ModalProducts() {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <button onClick={() => setOpenModal(true)} className='bg-blue-950 hover:bg-dark-pastel-blue text-white font-bold py-2 px-4 rounded'>Novo Produto</button>
      <Popup
        open={openModal}
        onClose={closeModal}
        modal
        closeOnDocumentClick={true}
        overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
        contentStyle={{ borderRadius: "1rem", paddingBottom: "2rem" }}
      >
        <div>
          <FormProducts closeModal={closeModal} />
        </div>
      </Popup>
    </>
  );
}

export default ModalProducts;
