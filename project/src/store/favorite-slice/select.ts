import { State } from '../../types/state';
import { SliceName } from '../../constants';

export const selectFavoriteFilms = (state: State) => state[SliceName.Favorite].favoriteFilms;

export const selectIsLoadingFavoriteFilms = (state: State) => state[SliceName.Favorite].isFavoriteFilmsDataLoading;

export const selectIsLoadedFavoriteFilms = (state: State) => state[SliceName.Favorite].isFavoriteFilmsDataLoaded;

export const selectIsErrorLoadingFavoriteFilms = (state: State) => state[SliceName.Favorite].isFavoriteFilmsDataLoadingError;
