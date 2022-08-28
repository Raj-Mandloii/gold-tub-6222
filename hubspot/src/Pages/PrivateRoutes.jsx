import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const auth = useSelector((store) => store.isAuth);
  console.log(auth);
  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoutes;
