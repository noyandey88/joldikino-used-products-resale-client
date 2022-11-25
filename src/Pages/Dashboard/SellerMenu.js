import React from 'react';
import { NavLink } from 'react-router-dom';

const SellerMenu = () => {
  return (
    <div className="inline-flex border-b border-gray-200">
      <NavLink to="/dashboard/myproducts" className={({isActive})=> isActive ? 'text-sky-600 font-bold border-blue-500 h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none' : 'h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none'}>My Products</NavLink>

      <NavLink to="/dashboard/addproduct" className={({isActive})=> isActive ? 'text-sky-600 font-bold border-blue-500 h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none' : 'h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none'}>Add A Product</NavLink>

      <NavLink to="/dashboard/buyers" className={({isActive})=> isActive ? 'text-sky-600 font-bold border-blue-500 h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none' : 'h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none'}>My Buyers</NavLink>
    </div>
  );
};

export default SellerMenu;