import { Fragment, useState } from 'react';

type Event = {
  target: {
    value: string;
  }
}

export default function AddReviewForm() {
  const [userRating, setUserRating] = useState(8);
  const [userReview, setUserReview] = useState('');
  // eslint-disable-next-line no-console
  console.log(userReview);
  // eslint-disable-next-line no-console
  console.log(userRating);

  const textareaChangeHandle = (evt: Event) => {
    const value = evt.target.value;
    setUserReview(value);
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from({ length: 10 }, (item, index) => index + 1)
              .reverse()
              .map((number) => (
                <Fragment key={number}>
                  <input
                    className="rating__input"
                    id={`star-${number}`}
                    type="radio" name="rating"
                    value={number}
                    onChange={(evt) => setUserRating(Number(evt.target.value))}
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
          onChange={textareaChangeHandle}
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
