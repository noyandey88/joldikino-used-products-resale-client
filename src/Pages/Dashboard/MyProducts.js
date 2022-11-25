import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Products from './Products';

const MyProducts = () => {
  const { data: products = [], loading, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('joldikino-token')}`
        }
      });
      const data = await res.json();
      return data;
    }
  })
  return (
    <div>
      <div>
        <h2 className="text-2xl">My Products</h2>
      </div>
      {
        products.map(product => <Products
          key={product._id}
          product={product}
        ></Products>)
      }
    </div>
  );
};

export default MyProducts;