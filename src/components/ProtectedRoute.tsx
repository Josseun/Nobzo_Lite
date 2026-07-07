import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const storedUser =
    localStorage.getItem("user") || sessionStorage.getItem("user");

  if (!storedUser) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
