import React from 'react';
import { NavLink } from 'react-router-dom';

const SellerMenu = () => {
  return (
    <div className="inline-flex border-b border-gray-200">
      <NavLink to="/dashboard/products" className="h-10 px-4 py-2 -mb-px text-sm text-center text-sky-600 bg-transparent border-b-2 border-blue-500 sm:text-base whitespace-nowrap focus:outline-none">My Products</NavLink>

      <NavLink to="/dashboard/addproduct" className="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">Add A Product</NavLink>

      <NavLink to="/dashboard/buyers" className="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">My Buyers</NavLink>
    </div>
  );
};

export default SellerMenu;