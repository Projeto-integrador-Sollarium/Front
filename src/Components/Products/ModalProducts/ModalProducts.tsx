import React from 'react';
import FormProducts from '../FormProducts/FormProducts';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalProducts.css'

function ModalProducts() {
  return (
    <>
      <Popup 
        trigger={<button className='bg-blue-950 hover:bg-dark-pastel-blue text-white font-bold py-2 px-4 rounded-l'>Novo Produto</button>} modal>
        <div>
          <FormProducts />
        </div>
      </Popup>
    </>
  );
}

export default ModalProducts;