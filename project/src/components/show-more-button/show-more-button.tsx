import { useAppDispatch } from '../../hooks';
import { showMoreFilms } from '../../store/actions';

type ShowMoreButtonProps = {
  showButton: boolean;
}

export default function ShowMoreButton({ showButton }: ShowMoreButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button
        disabled = {!showButton}
        className={`catalog__button ${!showButton ? 'catalog_button--hidden' : ''}`}
        type="button"
        onClick={() => dispatch(showMoreFilms())}
      >
        Show more
      </button>
    </div>
  );
}
