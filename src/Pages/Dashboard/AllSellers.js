import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Seller from '../../Components/Dashboard/Seller';
import Spinner from '../../Components/Spinner';
import { deleteSavedUser, verifyUser } from '../../api/user';
import { AuthContext } from '../../contexts/AuthProvider';

const AllSellers = () => {
  const { logoutUser } = useContext(AuthContext);
  const { data: sellers = [], refetch, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users?role=seller`, {
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
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="uppercase">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                Email
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                Status
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {
              sellers?.map(seller => <Seller
                key={seller._id}
                seller={seller}
                handleVerifySeller={handleVerifySeller}
                handleDeleteSeller={handleDeleteSeller}
              ></Seller>)
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllSellers;