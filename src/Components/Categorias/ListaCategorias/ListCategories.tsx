import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { searchProducts } from '../../../Services/Service';
import Category from '../../../Models/Category';
import CardCategories from '../CardCategories/CardCategories';

function ListCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    findCategories();
  }, []);

  async function findCategories() {
    try {
      await searchProducts('categories', setCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center">
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
        )}
      </div>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CardCategories key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCategories;
