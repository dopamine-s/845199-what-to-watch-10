import Logo from '../../components/logo/logo';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchSimilarFilmsAction, fetchFilmAction, fetchFilmReviewsAction } from '../../store/api-actions';
import NotFound from '../not-found/not-found';
import { AppRoute, AuthorizationStatus } from '../../constants';
import FilmsList from '../../components/films-list/films-list';
import FilmTabs from '../../components/film-tabs.tsx/film-tabs';
import UserBlock from '../../components/user-block/user-block';

export default function FilmPage(): JSX.Element {
  const allFilms = useAppSelector((state) => state.films);
  const film = useAppSelector((state) => state.film);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const filmReviews = useAppSelector((state) => state.filmReviews);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = params.id;
  const favoriteFilms = allFilms.filter((item) => item.isFavorite);
  const [isAddedToMyList, setAddToMyList] = useState(false);
  const [myListCount, setMyListCount] = useState(favoriteFilms.length);
  const handleClick = (): void => {
    setAddToMyList((prevState) => !prevState);
    isAddedToMyList ? setMyListCount(myListCount - 1) : setMyListCount(myListCount + 1);
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(fetchSimilarFilmsAction(id));
    dispatch(fetchFilmAction(id));
    dispatch(fetchFilmReviewsAction(id));
    // eslint-disable-next-line
  }, [id]);

  if (!film) {
    return (
      <NotFound />
    );
  }

  return (
    <>
      <section className="film-card film-card--full" style={{ backgroundColor: `${film.backgroundColor}`} }>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo light={false} />

            <UserBlock />

          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  onClick={() => navigate(`${AppRoute.Player}/${film.id}`)}
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
                { authorizationStatus === AuthorizationStatus.Auth ? (
                  <Link
                    className="btn film-card__button"
                    to={AppRoute.AddReview}
                  >
                  Add review
                  </Link>
                ) : ('')}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>
            <FilmTabs
              film={film}
              filmReviews={filmReviews}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          { similarFilms ?
            (
              <FilmsList
                films={similarFilms}
                showButton={false}
              />
            ) :
            (
              ''
            )}
        </section>

        <footer className="page-footer">
          <Logo light />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
