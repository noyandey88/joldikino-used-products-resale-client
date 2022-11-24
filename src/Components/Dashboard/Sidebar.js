import React from 'react';
import AdminMenu from '../../Pages/Dashboard/AdminMenu';
import BuyerMenu from '../../Pages/Dashboard/BuyerMenu';
import SellerMenu from '../../Pages/Dashboard/SellerMenu';

const Sidebar = ({ userRole }) => {
  return (
    <div>
      {
        userRole === 'admin' ?
          <AdminMenu></AdminMenu>
          :
          <>
            {userRole === 'seller' ?
              <SellerMenu></SellerMenu>
              :
              <BuyerMenu></BuyerMenu>
            }
          </>
      }
    </div>
  );
};

export default Sidebar;