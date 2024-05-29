
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth  from "../firebase/firebase.config";
const PrivateRoute = ({ children }) => {
  
    
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;

};

export default PrivateRoute;