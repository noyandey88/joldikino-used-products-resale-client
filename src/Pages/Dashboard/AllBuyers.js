import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Buyer from '../../Components/Dashboard/Buyer';

const AllBuyers = () => {
  const { data: buyers = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users?role=buyer`, {
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
        buyers.map(buyer => <Buyer
          key={buyer._id}
          buyer={buyer}
        ></Buyer>)
      }
    </div>
  );
};

export default AllBuyers;