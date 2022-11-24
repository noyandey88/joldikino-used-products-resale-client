import React from 'react';
import AdminMenu from '../../Pages/Dashboard/AdminMenu';
import BuyerMenu from '../../Pages/Dashboard/BuyerMenu';
import SellerMenu from '../../Pages/Dashboard/SellerMenu';

const Sidebar = ({ userRole }) => {
  return (
    <>
      <div className="drawer drawer-end drawer-mobile">
        <input id="joldikino-menu" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">

          <label htmlFor="joldikino-menu" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side shadow-lg">
          <label htmlFor="joldikino-menu" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;