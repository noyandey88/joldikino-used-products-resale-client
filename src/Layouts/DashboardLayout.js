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
      <div>
        <Outlet></Outlet>
        <Sidebar userRole={userRole}></Sidebar>
      </div>
    </div>
  );
};

export default DashboardLayout;