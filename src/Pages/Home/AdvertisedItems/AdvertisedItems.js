import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryProduct from '../../../Components/CategoryProduct';

const AdvertisedItems = () => {
  const { data: advertisedProducts = [] } = useQuery({
    queryKey: ['advertised'],
    queryFn: async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/advertised`);
      const data = await response.json();
      return data;
    }
  })
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl text-center font-bold">Advertised Items</h1>
      </div>
      {/* all advertised products */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {
            advertisedProducts.map(product => <CategoryProduct
              key={product._id}
              camera={product}
            ></CategoryProduct>)
          }
        </div>
      </div>
    </div>
  );
};

export default AdvertisedItems;