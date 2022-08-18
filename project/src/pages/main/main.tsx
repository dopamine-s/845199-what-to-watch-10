import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { Film } from '../../types/films';
import { clearSelectedGenre, resetFilmsShownCount } from '../../store/actions';
import PromoFilm from '../../components/promo-film/promo-film';
import Logo from '../../components/logo/logo';
import GenreList from '../../components/genre-list/genre-list';
import FilmsList from '../../components/films-list/films-list';

export default function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const allFilms = useAppSelector((state) => state.films);
  const [filmsByGenre, setFilmsByGenre] = useState<Film[]>([]);
  const selectedGenre = useAppSelector((state) => state.selectedGenre);
  const filmsCount = useAppSelector((state) => state.filmsShownCount);

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
      <PromoFilm />

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
