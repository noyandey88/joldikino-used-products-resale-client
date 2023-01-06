import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading, isAdmin } = useContext(AuthContext);

  if (loading) {
    return <Spinner></Spinner>
  };

  if (user && isAdmin) {
    return children;
  }
  
  return <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;