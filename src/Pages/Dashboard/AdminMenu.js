import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AdminMenu = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="inline-flex border-b border-gray-200">
      <NavLink to="/dashboard" className="h-10 px-4 py-2 -mb-px text-sm text-center text-sky-600 bg-transparent border-b-2 border-blue-500 sm:text-base whitespace-nowrap focus:outline-none">All Sellers</NavLink>

      <NavLink to="/dashboard" className="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">All Buyers</NavLink>

      <NavLink to="/dashboard" className="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">Reported Items</NavLink>
    </div>
  );
};

export default AdminMenu;