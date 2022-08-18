import { Fragment, useState, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { sendNewReviewAction } from '../../store/api-actions';
import { NewReview } from '../../types/reviews';

export default function AddReviewForm() {
  const MAX_RATE = 10;
  const DEFAULT_RATE = 0;
  const MIN_USER_REVIEW_LENGTH = 50;
  const MAX_USER_REVIEW_LENGTH = 400;
  const [userRating, setUserRating] = useState(DEFAULT_RATE);
  const [userReview, setUserReview] = useState('');
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = params.id;
  const { isDataUploading } = useAppSelector((state) => state);

  const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const reviewText = event.target.value;
    setUserReview(reviewText);
  };

  const ratingChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rating = Number(event.target.value);
    setUserRating(rating);
  };

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (id && userReview !== null && userRating !== null) {
      dispatch(sendNewReviewAction(({
        id: id,
        comment: userReview,
        rating: userRating,
      }) as NewReview ));
    }
  };

  return (
    <form
      className="add-review__form"
      onSubmit={submitHandler}
    >
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from({ length: MAX_RATE }, (_, index) => index + 1)
              .reverse()
              .map((number) => (
                <Fragment key={number}>
                  <input
                    className="rating__input"
                    id={`star-${number}`}
                    type="radio"
                    name="rating"
                    value={number}
                    onChange={ratingChangeHandler}
                    defaultChecked={number === userRating}
                  />
                  <label
                    className="rating__label"
                    htmlFor={`star-${number}`}
                  >
                    Rating {number}
                  </label>
                </Fragment>
              ))
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          onChange={textChangeHandler}
          value={userReview}
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text (50 to 400 symbols)."
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={isDataUploading || userRating === DEFAULT_RATE || userReview.length < MIN_USER_REVIEW_LENGTH || userReview.length > MAX_USER_REVIEW_LENGTH}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
