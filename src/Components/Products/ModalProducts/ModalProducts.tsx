import React from 'react';
import FormProducts from '../FormProducts/FormProducts';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalProducts.css'

function ModalProducts() {
  return (
    <>
      <Popup 
        trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Novo Produto</button>} modal>
        <div>
          <FormProducts />
        </div>
      </Popup>
    </>
  );
}

export default ModalProducts;