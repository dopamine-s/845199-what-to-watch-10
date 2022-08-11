import { createReducer } from '@reduxjs/toolkit';
import { setSelectedGenre, clearSelectedGenre, setDataLoadingStatus, loadFilms, loadPromoFilm, showMoreFilms, resetFilmsShownCount, setAuthorizationStatus, setUserData } from './actions';
import { Film } from '../types/films';
import { UserData } from '../types/user-data';
import { FILMS_SHOWN_COUNT, AuthorizationStatus } from '../constants';

type InitialStateTypes = {
  selectedGenre: string;
  films: Film [];
  promoFilm: Film | null;
  filmsShownCount: number;
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
  userData: UserData | null;
}

const initialState: InitialStateTypes = {
  selectedGenre: '',
  films: [],
  promoFilm: null,
  filmsShownCount: FILMS_SHOWN_COUNT,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  userData: null,
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
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});
