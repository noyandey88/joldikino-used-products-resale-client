import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { deleteSavedUser } from '../../api/user';
import Buyer from '../../Components/Dashboard/Buyer';

const AllBuyers = () => {
  const { data: buyers = [], refetch, isLoading } = useQuery({
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
  });

  const handleDeleteBuyer = (id) => {
    console.log(id);
    deleteSavedUser(id)
      .then(data => {
        console.log(data);
        refetch();
        toast.success('Buyer Deleted Successfully');
      }).catch(error => {
        console.log(error);
        toast.error(error.message);
      })
  }

  return (
    <div>
      {
        buyers.map(buyer => <Buyer
          key={buyer._id}
          buyer={buyer}
          handleDeleteBuyer={handleDeleteBuyer}
        ></Buyer>)
      }
    </div>
  );
};

export default AllBuyers;