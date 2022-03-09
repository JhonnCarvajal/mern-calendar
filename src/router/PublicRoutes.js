import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const { uid } = useSelector((state) => state.auth);

  return !!uid ? <Navigate to="/" /> : children;
};

export default PublicRoutes;
