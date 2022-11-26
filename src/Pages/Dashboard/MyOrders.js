import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Components/Spinner';

const MyOrders = () => {
  const { data: orders = [], isLoading } = useQuery({
    queryKey: ['bookings'],
    queryFn: async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('joldikino-token')}`
        }
      });
      const data = await response.json();
      return data;
    }
  });

  if (isLoading) {
    return <Spinner></Spinner>
  };

  return (
    <div>
      <div className="mb-2">
        <h2 className="text-2xl font-bold">My Orders</h2>
      </div>
      <div>
        <div className="overflow-x-auto px-1">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((order, i) => <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <img className="w-12 h-12 object-cover" src={order?.itemImage} alt="orderedImage" />
                  </td>
                  <td>{order?.itemName}</td>
                  <td>${order?.itemPrice}</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Pay</button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;