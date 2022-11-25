import { useQuery } from '@tanstack/react-query';
import React from 'react';

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
      {
        advertisedProducts.map(product => <p>{product.productName}</p>)
      }
    </div>
  );
};

export default AdvertisedItems;