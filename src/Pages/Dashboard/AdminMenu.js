import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AdminMenu = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="inline-flex border-b border-gray-200">
      <NavLink to="/dashboard/allsellers" className={({isActive})=> isActive ? 'text-sky-600 font-bold border-blue-500 h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none' : 'h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none'}>All Sellers</NavLink>

      <NavLink to="/dashboard/allbuyers" className={({isActive})=> isActive ? 'text-sky-600 font-bold border-blue-500 h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none' : 'h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none'}>All Buyers</NavLink>

      <NavLink to="/dashboard/reporteditems" className={({isActive})=> isActive ? 'text-sky-600 font-bold border-blue-500 h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none' : 'h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none'}>Reported Items</NavLink>
    </div>
  );
};

export default AdminMenu;