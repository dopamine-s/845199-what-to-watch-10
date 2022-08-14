import Review from '../film-review/film-review';
import { FilmReview } from '../../types/reviews';
import NoReviews from '../no-reviews/no-reviews';

type SingleFilmReviewsProps = {
  filmReviews: FilmReview[];
}

export default function SingleFilmReviews( {filmReviews }: SingleFilmReviewsProps): JSX.Element {

  if (filmReviews.length === 0) {
    return (
      <NoReviews />
    );
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {filmReviews.filter((_, index) => index % 2 === 0).map((review) => <Review key={review.id} filmReview={review} />)}
      </div>

      <div className="film-card__reviews-col">
        {filmReviews.filter((_, index) => index % 2 !== 0).map((review) => <Review key={review.id} filmReview={review} />)}
      </div>
    </div>
  );
}
