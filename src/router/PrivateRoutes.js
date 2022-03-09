import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ children }) => {
  const { uid } = useSelector((state) => state.auth);
  return !!uid ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
