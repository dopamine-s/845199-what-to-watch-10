// import { showMoreFilms } from '../../store/actions';

export default function ShowMoreButton(): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        // onClick={() => dispatch(showMoreFilms())}
      >
        Show more
      </button>
    </div>
  );
}
