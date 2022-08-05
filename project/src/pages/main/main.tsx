import GenreList from '../../components/genre-list/genre-list';
import FilmsList from '../../components/films-list/films-list';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearSelectedGenre, resetFilmsShownCount } from '../../store/actions';
import Logo from '../../components/logo/logo';
import { Film } from '../../types/films';
import { AppRoute } from '../../constants';

export default function Main(): JSX.Element {
  const allFilms = useAppSelector((state) => state.films);
  const promoFilm = useAppSelector((state) => state.promoFilm);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isAddedToMyList, setAddToMyList] = useState(false);
  const [filmsByGenre, setFilmsByGenre] = useState<Film[]>([]);
  const favoriteFilms = allFilms.filter((item) => item.isFavorite);
  const [myListCount, setMyListCount] = useState(favoriteFilms.length);
  const selectedGenre = useAppSelector((state) => state.selectedGenre);

  const filmsCount = useAppSelector((state) => state.filmsShownCount);

  const handleClick = ():void => {
    setAddToMyList((prevState) => !prevState);
    isAddedToMyList ? setMyListCount(myListCount - 1) : setMyListCount(myListCount + 1);
  };

  useEffect(() => {
    dispatch(clearSelectedGenre());
    dispatch(resetFilmsShownCount());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!selectedGenre) {
      return;
    }
    setFilmsByGenre(allFilms.filter(
      (film: Film) => film.genre.toLowerCase() === selectedGenre.toLowerCase())
    );
    dispatch(resetFilmsShownCount());
    // eslint-disable-next-line
  }, [selectedGenre, allFilms]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={promoFilm?.backgroundImage}
            alt={promoFilm?.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo light={false} />

          <ul className="user-block">
            <li className="user-block__item">
              <div
                className="user-block__avatar"
                onClick={() => navigate(AppRoute.MyList)}
              >
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a href="/" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promoFilm?.posterImage}
                alt={promoFilm?.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">
                {promoFilm?.name}
              </h2>
              <p className="film-card__meta">
                <span className="film-card__genre">
                  {promoFilm?.genre}
                </span>
                <span className="film-card__year">
                  {promoFilm?.released}
                </span>
              </p>

              <div className="film-card__buttons">
                <button
                  onClick={() => navigate(`${AppRoute.Player}/${promoFilm?.id}`)}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <GenreList />
          </ul>
          <div className="catalog__films-list-main-wrap">
            <FilmsList
              films={selectedGenre ? filmsByGenre.slice(0, filmsCount) : allFilms.slice(0, filmsCount)}
              showButton={selectedGenre ? filmsCount < filmsByGenre.length : filmsCount < allFilms.length}
            />
          </div>
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
