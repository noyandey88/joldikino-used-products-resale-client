import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { deleteSavedUser } from '../../api/user';
import Buyer from '../../Components/Dashboard/Buyer';
import Spinner from '../../Components/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';

const AllBuyers = () => {
  const { logoutUser } = useContext(AuthContext);
  const { data: buyers = [], refetch, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users?role=buyer`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('joldikino-token')}`
          // authorization: `bearer ${window.document.cookie.split('; ')[1].split('=')[1]}`
        }
      });
      // when auth token is expired
      if (res.status === 401 || res.status === 403) {
        return logoutUser().then(() => {
          toast.error("Session Expired");
        }).catch((err) => {
          console.error(err);
        })
      }
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
  };

  if (isLoading) {
    return <Spinner></Spinner>
  }

  return (
    <div>
      {
        buyers?.map(buyer => <Buyer
          key={buyer._id}
          buyer={buyer}
          handleDeleteBuyer={handleDeleteBuyer}
        ></Buyer>)
      }
    </div>
  );
};

export default AllBuyers;