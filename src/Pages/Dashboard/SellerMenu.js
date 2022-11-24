import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SellerMenu = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="my-2 flex items-center gap-4">
          <img className="w-20" src={user?.photoURL} alt="" />
        <div>
          <h2 className="font-medium">User type: <span className="font-bold text-primary">Seller</span></h2>
          <p className="font-medium">Name: {user?.displayName}</p>
          <p className="font-medium">Email: {user?.email}</p>
        </div>
      </div>
      <hr />
      <ul className="menu p-2 w-80 bg-base-100 text-base-content">
        <li><NavLink to="/products">My Products</NavLink></li>
        <li><NavLink to="/addproduct">Add A Product</NavLink></li>
        <li><NavLink to="/buyers">My Buyers</NavLink></li>
      </ul>
    </div>
  );
};

export default SellerMenu;