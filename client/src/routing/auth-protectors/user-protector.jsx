import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from '../../store/auth';
import routes from '../routes';

const UserProtector = ({ children }) => {
  const { pathname } = useLocation();
  const auth = useSelector(authSelector);
  console.log(auth);

  if (!auth.loggedIn) {
    return <Navigate to={routes.LoginPage} />;
  }

  if (auth.user.role !== 'USER') {
    return <Navigate to={routes.ProfilePage} />;
  }

  return children;
};

export default UserProtector;
