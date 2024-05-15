import React, { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext';
import Product from '../../../Models/Product';
import CardProduct from '../CardProducts/CardProducts';
import { searchProducts } from '../../../Services/Service';
import ModalProducts from '../ModalProducts/ModalProducts';
import { toastAlerta } from "../utils/toastAlerta"

function ListProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  const { user } = useContext(AuthContext)


  async function findProducts() {
    try {
      await searchProducts('/products', setProducts);
    } catch (error: any) {
      toastAlerta('Algo deu errado')
    }
  }

  useEffect(() => {
    findProducts();
  }, [products.length]);

  console.log(user)
  return (
    <>
      {products.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
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

      <div>
        { user.id === 1 ? < ModalProducts /> : null }
        
      </div>
    </>
  );
}

export default ListProduct;