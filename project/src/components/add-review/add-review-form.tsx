import { Fragment, useState } from 'react';

export default function AddReviewForm() {
  const MAX_RATE = 10;
  const DEFAULT_RATE = 8;
  const [userRating, setUserRating] = useState(DEFAULT_RATE);
  const [userReview, setUserReview] = useState('');

  const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const reviewText = event.target.value;
    setUserReview(reviewText);
  };

  const ratingChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rating = Number(event.target.value);
    setUserRating(rating);
  };

  return (
    <form action="#" className="add-review__form">
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
          placeholder="Review text"
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}
