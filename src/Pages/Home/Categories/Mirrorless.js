import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryProduct from '../../../Components/CategoryProduct';

const Mirrorless = () => {
  const { data: cameras = [], loading, refetch } = useQuery({
    queryKey: ['products/category'],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/products/category?category=mirrorless`);
      const data = await res.json();
      return data;
    }
  });
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {
          cameras.map(camera => <CategoryProduct
            key={camera._id}
            camera={camera}
          ></CategoryProduct>)
        }
      </div>
    </div>
  );
};

export default Mirrorless;