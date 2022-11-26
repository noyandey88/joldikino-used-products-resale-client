import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryProduct from '../../../Components/CategoryProduct';
import Spinner from '../../../Components/Spinner';

const AdvertisedItems = () => {
  const { data: advertisedProducts = [], isLoading } = useQuery({
    queryKey: ['advertised'],
    queryFn: async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/advertised`);
      const data = await response.json();
      return data;
    }
  });

  if (isLoading) {
    return <Spinner></Spinner>
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl text-center font-bold">Advertised Items</h1>
      </div>
      {/* all advertised products */}
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-10">
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