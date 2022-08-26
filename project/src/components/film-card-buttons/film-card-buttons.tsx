import { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { selectAuthorizationStatus } from '../../store/auth-slice/select';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { Film } from '../../types/films';
import { selectFavoriteFilms } from '../../store/favorite-slice/select';
import { fetchFavoriteFilmsAction, sendFavoriteFilmStatusAction } from '../../store/api-actions';

type FilmCardButtonsProps = {
  film: Film;
}

function FilmCardButtons({ film }: FilmCardButtonsProps): JSX.Element {
  const favoriteFilms = useAppSelector(selectFavoriteFilms);
  const favoriteFilm = favoriteFilms.find((movie) => movie.id === film.id);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = params.id;
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const [isFavoriteStatusChanged, setFavoriteStatusChanged] = useState(false);

  const isFavorite = (): boolean => !!favoriteFilm && favoriteFilm.isFavorite;

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      if (isFavoriteStatusChanged) {
        setFavoriteStatusChanged((prevState) => !prevState);
      }
      dispatch(fetchFavoriteFilmsAction());
    }

  }, [dispatch,authorizationStatus, isFavoriteStatusChanged]);

  const handleFavoriteButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.SignIn);
    }
    dispatch(sendFavoriteFilmStatusAction({
      id: film.id,
      status: isFavorite() ? 0 : 1,
    }));
    setFavoriteStatusChanged((prevState) => !prevState);
  };

  const handlePlayButtonClick = (): void => {
    navigate(`${AppRoute.Player}/${film?.id}`);
  };

  return (
    <div className="film-card__buttons">
      <button
        onClick={handlePlayButtonClick}
        className="btn btn--play film-card__button"
        type="button"
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={handleFavoriteButtonClick}
      >
        {(isFavorite()) ?
          (
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg>
          ) :
          (
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
          )}
        <span>My list</span>
        <span className="film-card__count">{favoriteFilms.length}</span>
      </button>
      {id && authorizationStatus === AuthorizationStatus.Auth &&
        (
          <Link
            className="btn film-card__button"
            to={AppRoute.AddReview}
          >
            Add review
          </Link>
        )}
    </div>
  );
}

export default FilmCardButtons;
