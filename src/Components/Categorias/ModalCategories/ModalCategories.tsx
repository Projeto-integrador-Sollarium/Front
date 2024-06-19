import React from 'react';


import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalCategories.css'
import FormCategories from '../FormCategories/FormCategories';

function ModalCategories() {
  return (
    <>
      <Popup 
        trigger={<button className='bg-blue-950 hover:bg-dark-pastel-blue text-white font-bold py-2 px-4 rounded'>Nova Categoria</button>} modal>
        <div>
          <FormCategories />
        </div>
      </Popup>
    </>
  );
}

export default ModalCategories;