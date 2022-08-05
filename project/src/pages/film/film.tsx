import Logo from '../../components/logo/logo';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { FilmReviews } from '../../types/reviews';
import NotFound from '../not-found/not-found';
import { AppRoute } from '../../constants';
import FilmsList from '../../components/films-list/films-list';
import FilmTabs from '../../components/film-tabs.tsx/film-tabs';

const MAX_GENRE_FILTER_COUNT = 4;

type FilmProps = {
  filmsReviews: FilmReviews[];
}

export default function FilmPage({ filmsReviews }: FilmProps): JSX.Element {
  const allFilms = useAppSelector((state) => state.films);
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const film = allFilms.find((movie) => String(movie.id) === id);
  const favoriteFilms = allFilms.filter((item) => item.isFavorite);
  const favouriteListCount = favoriteFilms.length;
  const [isAddedToMyList, setAddToMyList] = useState(false);
  const [myListCount, setMyListCount] = useState(favouriteListCount);
  const handleClick = (): void => {
    setAddToMyList((prevState) => !prevState);
    isAddedToMyList ? setMyListCount(myListCount - 1) : setMyListCount(myListCount + 1);
  };

  const getFilteredFilms = () => {
    if (film && film.genre) {
      const filteredFilms = allFilms
        .filter((movie) => movie.genre === film.genre)
        .slice(0, MAX_GENRE_FILTER_COUNT)
        .filter((movie) => movie.id !== film.id);
      return filteredFilms;
    }
    return allFilms;
  };

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

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={() => navigate(`${AppRoute.Player}/${film.id}`)} className="btn btn--play film-card__button" type="button">
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
                <Link className="btn film-card__button" to="review">Add review</Link>
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
              filmsReviews={filmsReviews}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList
            films={getFilteredFilms()}
            showButton={false}
          />
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
