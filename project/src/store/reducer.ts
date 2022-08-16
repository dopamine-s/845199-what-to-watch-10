import { createReducer } from '@reduxjs/toolkit';
import {
  setSelectedGenre,
  clearSelectedGenre,
  setDataLoadingStatus,
  setReviewUploadingStatus,
  setFilms,
  setPromoFilm,
  setFilm,
  setSimilarFilms,
  setFilmReviews,
  setNewReview,
  showMoreFilms,
  resetFilmsShownCount,
  setAuthorizationStatus,
  setUserData,
  setLoginError,
  clearLoginError
} from './actions';
import { Film } from '../types/films';
import { UserData } from '../types/user-data';
import { FILMS_SHOWN_COUNT, AuthorizationStatus } from '../constants';
import { FilmReview, NewReview } from '../types/reviews';

type InitialStateTypes = {
  selectedGenre: string;
  films: Film[];
  promoFilm: Film | null;
  film: Film | null;
  similarFilms: Film[];
  filmReviews: FilmReview[];
  filmsShownCount: number;
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
  isDataUploading: boolean;
  userData: UserData | null;
  newReview: NewReview | null;
  loginError: string | null;
}

const initialState: InitialStateTypes = {
  selectedGenre: '',
  films: [],
  promoFilm: null,
  film: null,
  similarFilms: [],
  filmReviews: [],
  filmsShownCount: FILMS_SHOWN_COUNT,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  isDataUploading: false,
  userData: null,
  newReview: null,
  loginError: null,
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
    .addCase(setReviewUploadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(setSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(setFilmReviews, (state, action) => {
      state.filmReviews = action.payload;
    })
    .addCase(setNewReview, (state, action) => {
      state.newReview = action.payload;
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
    })
    .addCase(setLoginError, (state) => {
      state.loginError = 'error';
    })
    .addCase(clearLoginError, (state) => {
      state.loginError = null;
    });
});
