import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ ...rest }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return isLoggedIn ? <Outlet {...rest} /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
