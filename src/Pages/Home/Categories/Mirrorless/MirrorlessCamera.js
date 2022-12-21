import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { updateStatusToReported } from '../../../../api/product';
import { sellerVerification } from '../../../../api/user';
import { AuthContext } from '../../../../contexts/AuthProvider';

const MirrorlessCamera = ({ camera, setMirrorlessCamera, refetch }) => {
  const [isVerified, setIsVerified] = useState(false);
  const { productName, originalPrice, resalePrice, productImage, location, postedOn, condition, sellerName, stock, sellerEmail, used, status } = camera;
  const { userRole, user } = useContext(AuthContext);

  sellerVerification(sellerEmail)
    .then(data => {
      // console.log(data);
      setIsVerified(data)
    }).catch(error => {
      console.error(error);
    })

  const handleReportToAdmin = () => {
    if (!user) {
      return toast.error('Login to report');
    }
    updateStatusToReported(camera)
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          toast.success('Product has been Reported');
        }
      }).catch(error => {
        console.error(error);
        toast.error(error.message);
      })
  }

  return (
    stock !== 'sold' &&
    <>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img
          src={productImage}
          className="object-cover w-full h-64"
          alt=""
        />
        <div className="p-5 border border-t-0">
          <div className="flex justify-between items-center">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              >
                Posted On
              </span>
              <span className="text-gray-600">— {postedOn}</span>
            </p>
            {/* seller info */}
            {
              isVerified ?
                <div className="mb-3 flex gap-2 items-center">
                  <p className="font-medium text-sm">Seller: {sellerName}</p>
                  <CheckCircleIcon className="w-6 h-6 text-blue-500" />
                </div>
                :
                <p className="mb-3 font-medium text-sm pb-1">Seller: {sellerName}</p>
            }
          </div>
          <h2
            className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            {productName}
          </h2>
          <p className="mb-2 text-gray-700 text-sm">
            {camera?.description.slice(0, 100)}...
          </p>
          <div className="flex justify-between">
            <div>
              <p className="font-medium text-sm">Original Price: ${originalPrice}</p>
              <p className="font-medium text-sm">Resale Price: ${resalePrice}</p>
              <p className="font-medium text-sm">Status: {stock}</p>
            </div>
            <div>
              <p className="font-medium text-sm">Condition: {condition}</p>
              <p className="font-medium text-sm">Location: {location}</p>
              <p className="font-medium text-sm">Used: {used} Years</p>
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
                      <label onClick={() => setMirrorlessCamera(camera)} className="btn bg-green-500 hover:bg-green-600 border-0 mt-2" htmlFor="book-mirrorless">Book</label>
                      :
                      <button className="mt-2 btn text-gray-200 bg-green-500 hover:bg-green-600 border-0 btn-disabled">Booked</button>
                  }
                  {
                    status !== 'reported' ?
                      <button onClick={handleReportToAdmin} className="btn bg-green-500 hover:bg-green-600 border-0 mt-2">Report To Admin</button>
                      :
                      <button className="mt-2 btn bg-green-500 hover:bg-green-600 text-gray-200 border-0 btn-disabled">Reported</button>
                  }
                </div>
              }
            </>
          }
        </div>
      </div>
    </>
  );
};

export default MirrorlessCamera;