import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { showMoreFilms } from '../../store/films-slice/films-slice';
import { memo } from 'react';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => dispatch(showMoreFilms())}
      >
        Show more
      </button>
    </div>
  );
}

export default memo(ShowMoreButton);
