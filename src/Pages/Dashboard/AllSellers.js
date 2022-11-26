import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { deleteSavedUser, verifyUser } from '../../api/user';
import Seller from '../../Components/Dashboard/Seller';
import Spinner from '../../Components/Spinner';

const AllSellers = () => {
  const { data: sellers = [], refetch, isLoading } = useQuery({
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
  });

  const handleVerifySeller = (sellerInfo) => {
    console.log(sellerInfo);
    verifyUser(sellerInfo)
      .then(data => {
        console.log(data);
        refetch();
        toast.success('Seller Verified Successfully');
      }).catch(error => {
        console.error(error);
        toast.error(error.message);
      })
  };

  const handleDeleteSeller = (id) => {
    console.log(id);
    deleteSavedUser(id)
      .then(data => {
        console.log(data);
        refetch();
        toast.success('Seller Deleted Successfully');
      }).catch(error => {
        console.log(error);
        toast.error(error.message);
      })
  };

  if (isLoading) {
    return <Spinner></Spinner>
  }

  return (
    <div>
      {
        sellers.map(seller => <Seller
          key={seller._id}
          seller={seller}
          handleVerifySeller={handleVerifySeller}
          handleDeleteSeller={handleDeleteSeller}
        ></Seller>)
      }
    </div>
  );
};

export default AllSellers;