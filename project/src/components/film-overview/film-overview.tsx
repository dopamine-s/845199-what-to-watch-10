import { Films } from '../../types/films';
import { useParams, Link } from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found';
import { getFilmRateLevel } from '../../utils/utils';

type FilmOverviewProps = {
  films: Films;
}

export default function FilmOverview({ films }: FilmOverviewProps): JSX.Element {
  const params = useParams();
  const id = params.id;
  const film = films.find((movie) => String(movie.id) === id);

  if (!film) {
    return (
      <NotFound />
    );
  }

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <Link className="film-nav__link" to=''>Overview</Link>
          </li>
          <li className="film-nav__item">
            <Link className="film-nav__link" to='details'>Details</Link>
          </li>
          <li className="film-nav__item">
            <Link className="film-nav__link" to='reviews'>Reviews</Link>
          </li>
        </ul>
      </nav>

      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getFilmRateLevel(film.rating)}</span>
          <span className="film-rating__count">{`${film.scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>{`Director: ${film.director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${film.starring}`}</strong></p>
      </div>
    </div>
  );
}
