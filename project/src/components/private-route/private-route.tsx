import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { useAppSelector } from '../../hooks/use-app-selector';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const { authorizationStatus } = useAppSelector((state) => state);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}
