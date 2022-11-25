import { UserIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Seller = ({ seller }) => {
  const { name, isVerified, email } = seller;
  return (
    <div className="bg-gray-100/20 my-2 rounded-md flex justify-between items-center p-2 shadow-md">
      <div className="flex gap-4 items-center">
        {/* <img className="w-20 h-20 object-cover" src={productImage} alt="product" /> */}
        <UserIcon className="w-20" />
        <div className="space-y-1">
          <p className="text-sm lg:text-base font-medium">Name: <span>{name}</span></p>
          <p className="text-sm lg:text-base font-medium">Email: {email}</p>
          <p className="text-sm lg:text-base font-medium">Status: <span>{isVerified ? "Verified" : "Not Verified"}</span></p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <button className="btn btn-sm lg:btn-md btn-success text-white">Verify</button>
        <button className="btn btn-sm lg:btn-md btn-warning">Delete</button>
      </div>
    </div>
  );
};

export default Seller;