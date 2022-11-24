import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AdminMenu = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="my-2 text-center">
        <h2 className="font-medium text-center bg-sky-400 text-white">User type: <span className="font-bold">Admin</span></h2>
        <p>Name: <span className="font-bold">{user?.displayName}</span></p>
      </div>
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <li><NavLink to="/">All Sellers</NavLink></li>
        <li><NavLink to="/">All Buyers</NavLink></li>
        <li><NavLink to="/">Reported Items</NavLink></li>
      </ul>
    </div>
  );
};

export default AdminMenu;