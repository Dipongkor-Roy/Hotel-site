import { Navigate, useLocation } from "react-router-dom";
import  { AuthContext } from "../Contexts/UserContext";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext); //useContext not component name userContext
  console.log(user);
  const location = useLocation();
  if (loading) {
    return <div>Loading In process</div>;
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/logIn" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
