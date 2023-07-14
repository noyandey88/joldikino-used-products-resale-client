import { UserCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/Sidebar';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { AuthContext } from '../contexts/AuthProvider';

const DashboardLayout = () => {
  const { user, userRole } = useContext(AuthContext);
  console.log(userRole);

  return (
    <>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {/* topbar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-100 mb-2 px-2">
          <div>
            <div className="my-2 flex items-center gap-4">
              {
                user?.photoURL ?
                  <img className="w-20 h-20 object-cover" src={user?.photoURL} alt="" />
                  :
                  <UserCircleIcon className="h-20 w-20 text-sky-500" title={user?.displayName} />
              }
              <div>
                <h2 className="font-medium">User type: <span className="font-bold text-green-600 capitalize">{userRole}</span></h2>
                <p className="font-medium">Name: {user?.displayName}</p>
                <p className="font-medium">Email: {user?.email}</p>
              </div>
            </div>
          </div>
          <div>
            <Sidebar userRole={userRole} />
          </div>
        </div>
        <Outlet />
        <Footer />
      </motion.section>
    </>
  );
};

export default DashboardLayout;