import { useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found';

export default function NoReviews(): JSX.Element {
  const allFilms = useAppSelector((state) => state.films);
  const params = useParams();
  const id = params.id;
  const film = allFilms.find((movie) => String(movie.id) === id);

  if (!film) {
    return (
      <NotFound />
    );
  }

  return (
    <div
      className="film-card__reviews film-card__row film-card__no-reviews"
      style={{ backgroundColor: `${film.backgroundColor}` }}
    >
      <h2 className="film-card__no-reviews-header">
         No reviews so far...
      </h2>
    </div>
  );
}
