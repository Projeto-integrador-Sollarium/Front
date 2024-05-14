import React, { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext';
import Product from '../../../Models/Product';
import CardProduct from '../CardProducts/CardProducts';
import { searchProducts } from '../../../Services/Service';
import ModalProducts from '../ModalProducts/ModalProducts';

function ListProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  let navigate = useNavigate();

  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  async function findProducts() {
    try {
      await searchProducts('/products', setProducts);
    } catch (error: any) {
      alert('Algo deu errado')
    }
  }

  useEffect(() => {
    findProducts();
  }, [products.length]);
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
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map((products) => (
          <CardProduct key={products.id} product={products} />
        ))}
      </div>

      <div>
      <ModalProducts/>
      </div>
    </>
  );
}

export default ListProduct;