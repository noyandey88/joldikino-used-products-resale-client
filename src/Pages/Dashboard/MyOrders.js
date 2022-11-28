import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';

const MyOrders = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { data: orders = [], isLoading } = useQuery({
    queryKey: ['bookings'],
    queryFn: async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/bookings/${user?.email}`, {
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


  const handleNavigate = (id) => {
    navigate(`/dashboard/payment/${id}`);
    // console.log(id);
  }

  return (
    orders.length !== 0 ?
      <>
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
                    <th>Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    orders.map((order, i) => <tr key={order._id}>
                      <th>{i + 1}</th>
                      <td>
                        <img className="w-12 h-12 object-cover" src={order?.itemImage} alt="orderedImage" />
                      </td>
                      <td>{order?.itemName}</td>
                      <td>${order?.itemPrice}</td>
                      <td>
                        {
                          order.itemPrice && !order.paid &&
                          <button onClick={() => handleNavigate(order._id)} className="btn btn-sm bg-green-500 hover:bg-green-600 border-0">Pay</button>
                        }
                        {
                          order.itemPrice && order.paid && <p className="text-green-600 font-bold">Paid</p>
                        }
                      </td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
      :
      <div className="min-h-screen flex justify-center">
        <h2 className="text-4xl font-semibold">You haven't any orders.</h2>
      </div>
  );
};

export default MyOrders;