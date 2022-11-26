import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { deleteProduct } from '../../api/product';
import Spinner from '../../Components/Spinner';

const ReportedItems = () => {
  const { data: items = [], isLoading } = useQuery({
    queryKey: ['/reported'],
    queryFn: async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/reported`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('joldikino-token')}`
        }
      });
      const data = await response.json();
      return data;
    }
  });

  // delete reported product
  const handleDeleteReportedItem = (id) => {
    // console.log(id);
    deleteProduct(id)
      .then(data => {
        console.log(data);
        toast.success('Product Deleted Successfully');
      }).catch(error => {
        console.error(error);
        toast.error(error.message);
      })
  }

  if (isLoading) {
    return <Spinner></Spinner>
  };

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                items?.map((item, i) => <tr key={i}>
                  <th>{i + 1}</th>
                  <th>
                    <img className="w-16 h-16 object-cover" src={item.productImage} alt="reportedItemImage" />
                  </th>
                  <td>{item?.productName}</td>
                  <td><span className="capitalize bg-red-300 px-2 py-1 rounded-md">{item?.status}</span></td>
                  <td>
                    <button onClick={() => handleDeleteReportedItem(item?._id)} className="btn btn-warning btn-sm">Delete</button>
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

export default ReportedItems;