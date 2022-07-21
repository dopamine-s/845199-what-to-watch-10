import { Films } from '../../types/films';
import { useParams, Link } from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found';
import { getTimeFromMins } from '../../utils/utils';

type FilmDetailsProps = {
  films: Films
}

export default function FilmDetails({ films }: FilmDetailsProps): JSX.Element {
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
          <li className="film-nav__item">
            <Link className="film-nav__link" to='..'>Overview</Link>
          </li>
          <li className="film-nav__item film-nav__item--active">
            <Link className="film-nav__link" to=''>Details</Link>
          </li>
          <li className="film-nav__item">
            <Link className="film-nav__link" to='../reviews'>Reviews</Link>
          </li>
        </ul>
      </nav>

      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{film.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {film.starring.map((actor, index) => {
                const isLastElement = index === film.starring.length - 1;

                return (
                  <>
                    <span key={actor}>{actor}</span>{!isLastElement && film.starring.length > 1 ? <>, <br /></> : null}
                  </>
                );
              })}
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{getTimeFromMins(film.runTime)}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{film.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
