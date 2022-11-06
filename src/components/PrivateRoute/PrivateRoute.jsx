import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLogged } from 'redux/authorization/authorizationsSelectors';

export default function PrivateRoute() {
  const isLogged = useSelector(getIsLogged);

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
