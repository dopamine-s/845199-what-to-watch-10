import { State } from '../../types/state';
import { SliceName } from '../../constants';

export const selectFavoriteFilms = (state: State) => state[SliceName.Favorite].favoriteFilms;
export const selectIsLoadingFavoriteFilms = (state: State) => state[SliceName.Favorite].isFavoriteFilmsDataLoading;
