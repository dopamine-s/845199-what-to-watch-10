import { createReducer } from '@reduxjs/toolkit';
import { setSelectedGenre, clearSelectedGenre, setDataLoadingStatus, loadFilms, loadPromoFilm, showMoreFilms, resetFilmsShownCount, requireAuthorization, setError } from './actions';
import { Film } from '../types/films';
import { FILMS_SHOWN_COUNT, AuthorizationStatus } from '../constants';

type InitialStateTypes = {
  selectedGenre: string;
  films: Film [];
  promoFilm: Film | null;
  filmsShownCount: number;
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
  error: string | null,
}

const initialState: InitialStateTypes = {
  selectedGenre: '',
  films: [],
  promoFilm: null,
  filmsShownCount: FILMS_SHOWN_COUNT,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectedGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(clearSelectedGenre, (state) => {
      state.selectedGenre = '';
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(showMoreFilms, (state) => {
      state.filmsShownCount += FILMS_SHOWN_COUNT;
    })
    .addCase(resetFilmsShownCount, (state) => {
      state.filmsShownCount = FILMS_SHOWN_COUNT;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
