import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const auth = localStorage.getItem("token");
  return auth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;