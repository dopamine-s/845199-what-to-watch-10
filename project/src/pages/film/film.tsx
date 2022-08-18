import Logo from '../../components/logo/logo';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { fetchSimilarFilmsAction, fetchFilmAction, fetchFilmReviewsAction } from '../../store/api-actions';
import NotFound from '../not-found/not-found';
import { AppRoute, AuthorizationStatus } from '../../constants';
import FilmsList from '../../components/films-list/films-list';
import FilmTabs from '../../components/film-tabs.tsx/film-tabs';
import UserBlock from '../../components/user-block/user-block';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';

export default function FilmPage(): JSX.Element {
  const film = useAppSelector((state) => state.film);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const filmReviews = useAppSelector((state) => state.filmReviews);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = params.id;

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

                <FilmCardButtons film={film}/>

                {authorizationStatus === AuthorizationStatus.Auth &&
                  (
                    <Link
                      className="btn film-card__button"
                      to={AppRoute.AddReview}
                    >
                  Add review
                    </Link>
                  )}
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
          {
            similarFilms &&
            (
              <FilmsList
                films={similarFilms}
                showButton={false}
              />
            )
          }
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
