import { FilmReviews } from '../../types/reviews';
import Review from '../film-review/film-review';
import { useParams, Link } from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found';

type FilmReviewsProps = {
  filmsReviews: FilmReviews[];
}

export default function SingleFilmReviews({ filmsReviews }: FilmReviewsProps): JSX.Element {
  const params = useParams();
  const id = params.id;
  const filmReviews = filmsReviews.find((singleFilmReviews) => String(singleFilmReviews.filmId) === id);

  if (!filmReviews) {
    return (
      <NotFound />
    );
  }

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <Link className="film-nav__link" to='..'>Overview</Link>
          </li>
          <li className="film-nav__item">
            <Link className="film-nav__link" to='../details'>Details</Link>
          </li>
          <li className="film-nav__item film-nav__item--active">
            <Link className="film-nav__link" to=''>Reviews</Link>
          </li>
        </ul>
      </nav>

      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {filmReviews.reviews.filter((_, index) => index % 2 === 0).map((review) => <Review key={review.id} filmReview={review} />)}
        </div>

        <div className="film-card__reviews-col">
          {filmReviews.reviews.filter((_, index) => index % 2 !== 0).map((review) => <Review key={review.id} filmReview={review} />)}
        </div>
      </div>

    </div>
  );
}
