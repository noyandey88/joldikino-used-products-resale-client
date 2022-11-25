import { UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getUserRole } from '../api/user';
import Sidebar from '../Components/Dashboard/Sidebar';
import { AuthContext } from '../contexts/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [userRole, setUserRole] = useState(null);

  // get user role
  useEffect(() => {
    getUserRole(user?.email)
      .then(data => {
        console.log(data);
        setUserRole(data);
      })
      .catch(error => {
        console.error(error);
      })
  }, [user]);

  console.log(userRole);

  return (
    <div>
      <Navbar></Navbar>
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
              <h2 className="font-medium">User type: <span className="font-bold text-primary capitalize">{userRole}</span></h2>
              <p className="font-medium">Name: {user?.displayName}</p>
              <p className="font-medium">Email: {user?.email}</p>
            </div>
          </div>
        </div>
        <div>
          <Sidebar userRole={userRole}></Sidebar>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;