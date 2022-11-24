import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const BuyerMenu = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="my-2">
        <div>
          <h2 className="font-medium bg-sky-400 text-white">User type: <span className="font-bold">Buyer</span></h2>
          <p>Name: <span className="font-bold">{user?.displayName}</span></p>
        </div>
      </div>
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <li><NavLink to="/orders">My Orders</NavLink></li>
        <li><NavLink to="/wishlist">My Wishlist</NavLink></li>
      </ul>
    </div>
  );
};

export default BuyerMenu;