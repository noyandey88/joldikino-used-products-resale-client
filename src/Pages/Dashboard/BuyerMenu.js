import React from 'react';
import { NavLink } from 'react-router-dom';

const BuyerMenu = () => {
  return (
    <div className="inline-flex border-b border-gray-200">
      <NavLink to="/dashboard/buyer/myorders" className="h-10 px-4 py-2 -mb-px text-sm text-center text-green-600 bg-transparent border-b-2 border-green-500 sm:text-base whitespace-nowrap focus:outline-none">My Orders</NavLink>
    </div>
  );
};

export default BuyerMenu;