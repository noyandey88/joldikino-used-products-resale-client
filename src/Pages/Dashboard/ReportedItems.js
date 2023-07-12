import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../Components/Spinner';
import { deleteProduct } from '../../api/product';

const ReportedItems = () => {
  const { data: items = [], isLoading, refetch } = useQuery({
    queryKey: ['/reported'],
    queryFn: async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/reported`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('joldikino-token')}`
          // authorization: `bearer ${window.document.cookie.split('; ')[1].split('=')[1]}`
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
        refetch();
        toast.success('Product Deleted Successfully');
      }).catch(error => {
        console.error(error);
        toast.error(error.message);
      })
  }

  if (isLoading) {
    return (
      <Spinner></Spinner>
    )
  };


  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="uppercase">
              <tr className="text-center">
                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Item Image</th>
                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Item Name</th>
                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Status</th>
                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                items?.map((item, i) => <tr key={i} className="text-center">
                  <th className="whitespace-nowrap font-semibold px-4 py-2 text-gray-700 flex justify-center">
                    <img className="w-16 h-16 object-cover" src={item.productImage} alt="reportedItemImage" />
                  </th>
                  <td className="whitespace-nowrap font-semibold px-4 py-2 text-gray-700">{item?.productName}</td>
                  <td className="whitespace-nowrap font-semibold px-4 py-2 text-gray-700">
                    <span className="capitalize text-red-500 px-2 py-1 rounded-sm font-semibold">
                      {item?.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap font-semibold px-4 py-2 text-gray-700">
                    <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                      <button
                        onClick={() => handleDeleteReportedItem(item?._id)}
                        className="inline-block p-3 text-gray-700 hover:bg-red-50 focus:relative"
                        title="Delete Product"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </span>
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