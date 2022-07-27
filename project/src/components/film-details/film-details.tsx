import { Film } from '../../types/films';
import NotFound from '../../pages/not-found/not-found';
import { getTimeFromMins } from '../../utils/utils';
import { Fragment } from 'react';

type FilmDetailsProps = {
  film: Film;
}

export default function FilmDetails({ film }: FilmDetailsProps): JSX.Element {

  if (!film) {
    return (
      <NotFound />
    );
  }

  return (
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
                <Fragment key={actor}>
                  <span >{actor}</span>{!isLastElement && film.starring.length > 1 ? <>, <br /></> : null}
                </Fragment>
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
  );
}
