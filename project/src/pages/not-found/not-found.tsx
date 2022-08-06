import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';

export default function NotFound(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo light={false} />
      </header>

      <div className="user-page__content">
        <h1 className="page-title user-page__title user-page__title--not-found">
          404 Not Found
        </h1>
        <Link
          className="logo__link logo__link--not-found"
          to="/"
        >
          Вернуться на главную
        </Link>
      </div>

      <footer className="page-footer">
        <Logo light />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
