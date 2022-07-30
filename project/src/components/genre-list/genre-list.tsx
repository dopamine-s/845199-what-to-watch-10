import { Link } from 'react-router-dom';
import { getGenres } from '../../utils/utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSelectedGenre, clearSelectedGenre } from '../../store/actions';

const MAX_GENRES_COUNT = 9;

export default function GenreList(): JSX.Element {
  const dispatch = useAppDispatch();
  const allMovies = useAppSelector((state) => state.films);
  const selectedGenre = useAppSelector((state) => state.selectedGenre);
  const genres = getGenres(allMovies);

  return (
    <ul className="catalog__genres-list">
      <li
        key={'allGenres'}
        className={`catalog__genres-item  ${!selectedGenre ? 'catalog__genres-item--active' : ''}`}
      >
        <Link
          className="catalog__genres-link"
          to=''
          onClick={() => dispatch(clearSelectedGenre())}
        >
          All genres
        </Link>
      </li>
      {
        genres.map((genre) => (
          <li
            key={genre}
            className={`catalog__genres-item  ${selectedGenre === genre ? 'catalog__genres-item--active' : ''}`}
          >
            <Link
              className="catalog__genres-link"
              to=''
              onClick={() => dispatch(setSelectedGenre(genre))}
            >{genre}
            </Link>
          </li>
        ))
          .slice(0, MAX_GENRES_COUNT)
      }
    </ul>
  );
}
