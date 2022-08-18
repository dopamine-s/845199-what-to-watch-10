import Logo from '../../components/logo/logo';
import FilmsList from '../../components/films-list/films-list';
import { useAppSelector } from '../../hooks/use-app-selector';
import UserBlock from '../../components/user-block/user-block';

export default function MyList(): JSX.Element {
  const allFilms = useAppSelector((state) => state.films);
  const favoriteFilms = allFilms.filter((item) => item.isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo light={false} />

        <h1 className="page-title user-page__title">
          My list
          <span className="user-page__film-count">
            {favoriteFilms.length}
          </span>
        </h1>

        <UserBlock />

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList
            films={favoriteFilms}
            showButton={false}
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
  );
}
