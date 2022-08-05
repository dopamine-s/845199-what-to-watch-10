import Logo from '../../components/logo/logo';
import AddReviewForm from '../../components/add-review/add-review-form';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import NotFound from '../not-found/not-found';
import { AppRoute } from '../../constants';

export default function AddReview(): JSX.Element {
  const allFilms = useAppSelector((state) => state.films);
  const params = useParams();
  const id = params.id;
  const film = allFilms.find((movie) => String(movie.id) === id);
  const navigate = useNavigate();

  if (!film) {
    return (
      <NotFound />
    );
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo light={false} />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`${AppRoute.Film}/${id}`}>{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to=''>Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar" onClick={() => navigate(AppRoute.MyList)}>
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a href="/" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
}
