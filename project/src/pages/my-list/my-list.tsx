import Logo from '../../components/logo/logo';
import FilmsList from '../../components/films-list/films-list';
import { Film } from '../../types/films';
import { MY_LIST_COUNT } from '../../mocks/my-list-info';

type MyListProps = {
  films: Film[];
}

export default function MyList({ films }: MyListProps): JSX.Element {
  const myListCount = MY_LIST_COUNT;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo light={false} />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{myListCount}</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a href="/" className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList films={films} />
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
