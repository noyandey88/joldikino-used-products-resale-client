import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';

const BuyerRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading, isBuyer } = useContext(AuthContext);

  if (loading) {
    return <Spinner></Spinner>
  };

  if (user && isBuyer) {
    return children;
  }

  return <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
};

export default BuyerRoute;