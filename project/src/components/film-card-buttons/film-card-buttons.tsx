import { useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectFilms } from '../../store/films-slice/select';
import { selectAuthorizationStatus } from '../../store/auth-slice/select';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { Film } from '../../types/films';

type FilmCardButtonsProps = {
  film: Film;
}

function FilmCardButtons({ film }: FilmCardButtonsProps): JSX.Element {
  const allFilms = useAppSelector(selectFilms);
  const favoriteFilms = allFilms.filter((item) => item.isFavorite);
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [isAddedToMyList, setAddToMyList] = useState(false);
  const [myListCount, setMyListCount] = useState(favoriteFilms.length);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  const handleClick = (): void => {
    setAddToMyList((prevState) => !prevState);
    if (isAddedToMyList) {
      setMyListCount(myListCount - 1);
    } else {
      setMyListCount(myListCount + 1);
    }
  };

  const handleNavigateClick = (): void => {
    navigate(`${AppRoute.Player}/${film?.id}`);
  };

  return (
    <div className="film-card__buttons">
      <button
        onClick={handleNavigateClick}
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
        onClick={handleClick}
      >
        {isAddedToMyList ?
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
        <span className="film-card__count">{myListCount}</span>
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
