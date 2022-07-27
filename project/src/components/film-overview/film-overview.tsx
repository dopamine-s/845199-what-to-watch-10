import { Film } from '../../types/films';
import NotFound from '../../pages/not-found/not-found';
import { getFilmRateLevel } from '../../utils/utils';

type FilmOverviewProps = {
  film: Film;
}

export default function FilmOverview({ film }: FilmOverviewProps): JSX.Element {

  if (!film) {
    return (
      <NotFound />
    );
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getFilmRateLevel(film.rating)}</span>
          <span className="film-rating__count">{`${film.scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${film.starring.join(', ')}`}</strong></p>
      </div>
    </>
  );
}
