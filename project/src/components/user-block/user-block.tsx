import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../constants';

export default function UserBlock(): JSX.Element{
  const navigate = useNavigate();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div
          className="user-block__avatar"
          onClick={() => navigate(AppRoute.MyList)}
        >
          <img
            src="img/avatar.jpg"
            alt="User avatar"
            width="63"
            height="63"
          />
        </div>
      </li>
      <li className="user-block__item">
        <a
          href="/"
          className="user-block__link"
        >
          Sign out
        </a>
      </li>
    </ul>
  );
}
