import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from '../hooks/useAuth'

export const PrivateRoutes = () => {
  const { isLogged } = useAuth();

  return isLogged ? <Outlet /> : <Navigate to='/' />;
}