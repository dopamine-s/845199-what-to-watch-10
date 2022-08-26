import { State } from '../../types/state';
import { SliceName } from '../../constants';

export const selectFilms = (state: State) => state[SliceName.Films].films;

export const selectFilm = (state: State) => state[SliceName.Films].film;

export const selectIsLoadingFilms = (state: State) => state[SliceName.Films].isFilmsDataLoading;

export const selectIsErrorLoadingFilms = (state: State) => state[SliceName.Films].isFilmsDataLoadingError;

export const selectIsLoadingFilm = (state: State) => state[SliceName.Films].isFilmDataLoading;

export const selectIsErrorLoadingFilm = (state: State) => state[SliceName.Films].isFilmDataLoadingError;

export const selectActiveGenre = (state: State) => state[SliceName.Films].selectedGenre;

export const selectFilmsShownCount = (state: State) => state[SliceName.Films].filmsShownCount;

export const selectSimilarFilms = (state: State) => state[SliceName.Films].similarFilms;

export const selectFilmReviews = (state: State) => state[SliceName.Films].filmReviews;

export const selectIsUploadingReview = (state: State) => state[SliceName.Films].isDataUploading;
