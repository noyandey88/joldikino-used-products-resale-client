import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { addToAdvertise, updateAdvertiseStatus } from '../../api/product';
import { AuthContext } from '../../contexts/AuthProvider';
import Products from './Products';

const MyProducts = () => {
  const { user } = useContext(AuthContext)
  const { data: products = [], loading, refetch } = useQuery({
    queryKey: ['products', user],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/products?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('joldikino-token')}`
        }
      });
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
            toast.success('Product Advertised Successfully');
          }).catch(error => {
            console.error(error);
            toast.error(error.message);
          })
      }).catch(error => {
        console.log(error);
      })
  }

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">My Products</h2>
      </div>
      {
        products.length !== 0 ?
          <div className="mb-8">
            {
              products.map(product => <Products
                key={product._id}
                product={product}
                handleAdvertise={handleAdvertise}
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