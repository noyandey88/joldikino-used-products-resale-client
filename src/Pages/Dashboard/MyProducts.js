import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { addToAdvertise, deleteProduct, updateAdvertiseStatus } from '../../api/product';
import Spinner from '../../Components/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';
import Products from './Products';

const MyProducts = () => {
  const { logoutUser } = useContext(AuthContext);
  const { user } = useContext(AuthContext)
  const { data: products = [], isLoading, refetch } = useQuery({
    queryKey: ['products/seller', user],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/products/seller?email=${user?.email}`, {
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

  const handleAdvertise = (productInfo) => {
    console.log(productInfo);
    updateAdvertiseStatus(productInfo)
      .then(data => {
        console.log(data);
        // add to advertise collection
        addToAdvertise(productInfo)
          .then(data => {
            console.log(data);
            refetch();
            toast.success('Product Advertised Successfully');
          }).catch(error => {
            console.error(error);
            toast.error(error.message);
          })
      }).catch(error => {
        console.log(error);
      })
  };

  const handleDeleteProduct = (id) => {
    // console.log(id);
    deleteProduct(id)
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          refetch();
          toast.success('Product Deleted Successfully');
        }
      }).catch(error => {
        console.error(error);
        toast.error(error.message);
      })
  };

  if (isLoading) {
  return <Spinner></Spinner>
}

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">My Products</h2>
      </div>
      {
        products?.length !== 0 ?
          <div className="mb-8">
            {
              products?.map(product => <Products
                key={product._id}
                product={product}
                handleAdvertise={handleAdvertise}
                handleDeleteProduct={handleDeleteProduct}
              ></Products>)
            }
          </div>
          :
          <div className="min-h-screen flex justify-center">
            <h2 className="text-4xl font-semibold">You haven't added any products yet.</h2>
          </div>
      }
    </div>
  );
};

export default MyProducts;