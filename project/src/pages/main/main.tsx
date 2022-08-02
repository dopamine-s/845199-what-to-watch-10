import GenreList from '../../components/genre-list/genre-list';
import FilmsList from '../../components/films-list/films-list';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilms, clearSelectedGenre, resetFilmsShownCount } from '../../store/actions';
import Logo from '../../components/logo/logo';
import { Film } from '../../types/films';
import { FilmInfo } from '../../types/film-info';
import { AppRoute } from '../../constants';
import { MY_LIST_COUNT} from '../../mocks/my-list-info';
import ShowMoreButton from '../../components/show-more-button/show-more-button';

type MainProps = {
  filmInfo: FilmInfo;
}

export default function Main({ filmInfo }: MainProps): JSX.Element {
  const { filmCardTitle, filmCardYear, filmCardGenre} = filmInfo;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isAddedToMyList, setAddToMyList] = useState(false);
  const [filmsByGenre, setFilmsByGenre] = useState<Film[]>([]);
  const [myListCount, setMyListCount] = useState(MY_LIST_COUNT);
  const selectedGenre = useAppSelector((state) => state.selectedGenre);
  const allFilms = useAppSelector((state) => state.films);
  const filmsCount = useAppSelector((state) => state.filmsShownCount);

  const handleClick = ():void => {
    setAddToMyList((prevState) => !prevState);
    isAddedToMyList ? setMyListCount(myListCount - 1) : setMyListCount(myListCount + 1);
  };

  useEffect(() => {
    dispatch(getFilms());
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
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmCardTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmCardGenre}</span>
                <span className="film-card__year">{filmCardYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
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

          <FilmsList films={selectedGenre ? filmsByGenre.slice(0, filmsCount) : allFilms.slice(0, filmsCount)}/>

          {
            selectedGenre ?
              filmsCount < filmsByGenre.length && <ShowMoreButton />
              : filmsCount < allFilms.length && <ShowMoreButton />
          }
          {
            selectedGenre ?
              filmsByGenre.length < 5 && <div style={{marginBottom: '195px'}}></div>
              : ''
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
