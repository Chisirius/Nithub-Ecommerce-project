import { useAuth } from "../hooks/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, authLoading } = useAuth();
  if (authLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    alert("Please login to access this page");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;