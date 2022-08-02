import { FilmReviews } from '../../types/reviews';
import Review from '../film-review/film-review';
import { useParams } from 'react-router-dom';
import NoReviews from '../no-reviews/no-reviews';

type FilmReviewsProps = {
  filmsReviews: FilmReviews[];
}

export default function SingleFilmReviews({ filmsReviews }: FilmReviewsProps): JSX.Element {
  const params = useParams();
  const id = params.id;
  const filmReviews = filmsReviews.find((singleFilmReviews) => String(singleFilmReviews.filmId) === id);

  if (!filmReviews) {
    return (
      <NoReviews />
    );
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {filmReviews.reviews.filter((_, index) => index % 2 === 0).map((review) => <Review key={review.id} filmReview={review} />)}
      </div>

      <div className="film-card__reviews-col">
        {filmReviews.reviews.filter((_, index) => index % 2 !== 0).map((review) => <Review key={review.id} filmReview={review} />)}
      </div>
    </div>
  );
}
