import { Link } from 'react-router-dom';
import { films } from '../../mocks/films';
import { getGenres } from '../../utils/utils';

const MAX_GENRES_COUNT = 9;

export default function GenreList(): JSX.Element {
  const genres = getGenres(films);

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <Link
          className="catalog__genres-link"
          to=''
        >
          All genres
        </Link>
      </li>
      {
        genres.map((genre) => (
          <li
            key={genre}
            className="catalog__genres-item"
          >
            <Link
              className="catalog__genres-link"
              to=''
            >{genre}
            </Link>
          </li>
        ))
          .slice(0, MAX_GENRES_COUNT)
      }
    </ul>
  );
}
