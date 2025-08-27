import React from 'react'
import { Navigate } from "react-router"
import { useSelector } from "react-redux"

const PrivateRoute = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  const isAuth = useSelector((state: any) => state.account.token);
  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute