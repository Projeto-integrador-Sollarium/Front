import React, { useContext, useEffect, useState } from 'react';
import { Grid } from 'react-loader-spinner';
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
        toastAlerta('O token expirou, favor logar novamente', 'erro')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'erro');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    findCategories();
  }, [categories.length]);
  return (
    <>
      {categories.length === 0 && (
        <Grid
        visible={true}
        height="80"
        width="80"
        color="#bg-escuro-dark-pastel-blue"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
        />
      )}
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