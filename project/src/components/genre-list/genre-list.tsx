import { Link } from 'react-router-dom';
import { getGenres } from '../../utils/utils';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { setSelectedGenre, clearSelectedGenre } from '../../store/films-slice/films-slice';
import { selectFilms, selectActiveGenre } from '../../store/films-slice/select';

const MAX_GENRES_COUNT = 9;

export default function GenreList(): JSX.Element {
  const dispatch = useAppDispatch();
  const allMovies = useAppSelector(selectFilms);
  const selectedGenre = useAppSelector(selectActiveGenre);
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
