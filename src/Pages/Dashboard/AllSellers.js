import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Seller from '../../Components/Dashboard/Seller';

const AllSellers = () => {
  const { data: sellers = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users?role=seller`, {
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
      {
        sellers.map(seller => <Seller
          key={seller._id}
          seller={seller}
        ></Seller>)
      }
    </div>
  );
};

export default AllSellers;