import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Buyer from '../../Components/Dashboard/Buyer';
import Spinner from '../../Components/Spinner';
import { deleteSavedUser } from '../../api/user';
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
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-200">
            {
              buyers?.map(buyer => <Buyer
                key={buyer._id}
                buyer={buyer}
                handleDeleteBuyer={handleDeleteBuyer}
              ></Buyer>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;