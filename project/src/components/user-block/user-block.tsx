import { useNavigate, Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { logoutAction } from '../../store/api-actions';
import { selectAuthorizationStatus, selectUserData } from '../../store/auth-slice/select';

export default function UserBlock(): JSX.Element{
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const userData = useAppSelector(selectUserData);

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate(AppRoute.Main);
  };

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <>
          <li className="user-block__item">
            <div
              className="user-block__avatar"
              onClick={() => navigate(AppRoute.MyList)}
            >
              <img
                src={userData ? userData.avatarUrl : 'img/avatar.jpg'}
                alt={`${userData?.name} avatar`}
                width="63"
                height="63"
              />
            </div>
          </li>
          <li className="user-block__item">
            <div
              className="user-block__link"
              onClick={handleLogout}
            >
            Sign out
            </div>
          </li>
        </>
      ) : (
        <li className="user-block__item">
          <Link
            className="user-block__link"
            to={`${AppRoute.SignIn}`}
          >
            Sign in
          </Link>
        </li>
      )}
    </ul>
  );
}
