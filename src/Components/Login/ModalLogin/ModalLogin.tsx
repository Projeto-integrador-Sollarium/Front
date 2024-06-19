import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import FormLogin from '../FormLogin/FormLogin';
import './ModalLogin.css';

function ModalLogin() {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <>
      <button onClick={openModalHandler} className='bg-blue-950 hover:bg-dark-pastel-blue text-white font-bold py-2 px-4 rounded'>Login</button>
      <Popup
        open={openModal}
        onClose={closeModalHandler}
        modal
        closeOnDocumentClick={true}
        overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
        contentStyle={{ borderRadius: "1rem", width: "auto", padding: "2rem" }}
      >
        <div>
          <FormLogin closeModal={closeModalHandler} />
        </div>
      </Popup>
    </>
  );
}

export default ModalLogin;