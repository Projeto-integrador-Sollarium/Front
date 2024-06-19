import React, { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext';
import Product from '../../../Models/Product';
import CardProduct from '../CardProducts/CardProducts';
import { searchProducts } from '../../../Services/Service';
import ModalProducts from '../ModalProducts/ModalProducts';
import { toastAlerta } from '../../../utils/toastAlerta';
import { ColorRing } from 'react-loader-spinner';

function ListProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  const { user } = useContext(AuthContext)


  async function findProducts() {
    try {
      await searchProducts('/products', setProducts);
    } catch (error: any) {
      toastAlerta('Algo deu errado', 'erro')
    }
  }

  useEffect(() => {
    findProducts();
  }, [products.length]);

  console.log(user)
  return (
    <>
    <div className="flex justify-center items-center">
      {products.length === 0 && (
        <ColorRing
        visible={true}
        height="300"
        width="300"
        colors={['#FF3232', '#FF5A5A', '#d5e4f5', '#8399E8', '#4D73FD']}
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
    />
      )}</div>
      
      <div className='flex flex-col'>
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((products) => (
                <CardProduct key={products.id} product={products} />
              ))}
            </div>
          </div>
        </div>
      </ div >

      
    </>
  );
}

export default ListProduct;