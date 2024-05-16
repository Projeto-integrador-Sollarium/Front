import React, { useContext, useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext';
import { find } from '../../../Services/Service';
import Category from '../../../Models/Category';
import CardCategories from '../CardCategories/CardCategories';
import { toastAlerta } from '../../../utils/toastAlerta';


function ListCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  let navigate = useNavigate();

  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  async function findCategories() {
    try {
      await find('categories', setCategories, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    findCategories();
  }, [categories.length]);
  return (
    <><div className="flex justify-center items-center">
      {categories.length === 0 && (
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
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((categories) => (
              <>
                <CardCategories key={categories.id} category={categories} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCategories;