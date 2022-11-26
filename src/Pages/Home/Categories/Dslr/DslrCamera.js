import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { updateStatusToReported } from '../../../../api/product';
import { sellerVerification } from '../../../../api/user';
import { AuthContext } from '../../../../contexts/AuthProvider';

const DslrCamera = ({ camera, setDslrCamera, refetch }) => {
  const [isVerified, setIsVerified] = useState(false);
  const { productName, originalPrice, resalePrice, productImage, location, postedOn, condition, sellerName, stock, description, sellerEmail, used, status } = camera;
  const { userRole } = useContext(AuthContext);

  console.log(userRole);

  sellerVerification(sellerEmail)
    .then(data => {
      // console.log(data);
      setIsVerified(data)
    }).catch(error => {
      console.error(error);
    });

  const handleReportToAdmin = () => {
    updateStatusToReported(camera)
      .then(data => {
        console.log(data);
        refetch();
        toast.success('Product has been Reported');
      }).catch(error => {
        console.error(error);
        toast.error(error.message);
      })
  }

  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <img
        src={productImage}
        className="object-cover w-full h-64"
        alt=""
      />
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <span
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
          >
            Posted On
          </span>
          <span className="text-gray-600">— {postedOn}</span>
        </p>
        <h2
          className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          {productName}
        </h2>
        <p className="mb-2 text-gray-700">
          {description.slice(0, 100)}...
        </p>
        <div className="flex justify-between">
          <div>
            <p className="font-medium">Original Price: ${originalPrice}</p>
            <p className="font-medium">Resale Price: ${resalePrice}</p>
            <p className="font-medium">Status: {stock}</p>
          </div>
          <div>
            <p className="font-medium">Condition: {condition}</p>
            <p className="font-medium">Location: {location}</p>
            {
              isVerified ?
                <div className="flex gap-2 items-center">
                  <p className="font-medium">Seller: {sellerName}</p>
                  <CheckCircleIcon className="w-6 h-6 text-blue-500" />
                </div>
                :
                <p className="font-medium">Seller: {sellerName}</p>
            }
          </div>
        </div>
        {
          userRole !== 'admin' &&
          <>
            {
              userRole !== 'seller' &&
              <div className="grid grid-cols-2 gap-4 items-center">
                {
                  stock !== 'booked' ?
                    <label onClick={() => setDslrCamera(camera)} className="btn btn-primary mt-2" htmlFor="book-product">Book</label>
                    :
                    <button className="btn btn-primary btn-disabled">Booked</button>
                }
                {/* <button className="btn btn-primary mt-2">Book</button> */}
                {
                  status !== 'reported' ?
                    <button onClick={handleReportToAdmin} className="btn btn-primary mt-2">Report To Admin</button>
                    :
                    <button className="btn btn-primary btn-disabled">Reported</button>
                }
              </div>
            }
          </>
        }

      </div>
    </div>
  );
};

export default DslrCamera;