import React from 'react';
import FormProducts from '../FormProducts/FormProducts';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalProducts.css'

function ModalProducts() {
  return (
    <>
      <Popup 
        trigger={<button className='bg-cyan-50 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>Novo Produto</button>} modal>
        <div>
          <FormProducts />
        </div>
      </Popup>
    </>
  );
}

export default ModalProducts;