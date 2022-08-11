import { useNavigate, Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus } from '../../constants';
import { logoutAction } from '../../store/api-actions';

export default function UserBlock(): JSX.Element{
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.userData);

  const logoutHandler = () => {
    dispatch(logoutAction());
    navigate(AppRoute.Main);
  };

  return (
    <ul className="user-block">
      { authorizationStatus === AuthorizationStatus.Auth ? (
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
              onClick={logoutHandler}
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
