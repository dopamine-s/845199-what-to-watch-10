import { createReducer } from '@reduxjs/toolkit';
import {
  setSelectedGenre,
  clearSelectedGenre,
  setDataLoadingStatus,
  setDataUploadingStatus,
  loadFilms,
  loadPromoFilm,
  loadFilm,
  loadSimilarFilms,
  loadFilmReviews,
  uploadNewReview,
  showMoreFilms,
  resetFilmsShownCount,
  setAuthorizationStatus,
  setUserData
} from './actions';
import { Film } from '../types/films';
import { UserData } from '../types/user-data';
import { FILMS_SHOWN_COUNT, AuthorizationStatus } from '../constants';
import { FilmReview, NewReview } from '../types/reviews';

type InitialStateTypes = {
  selectedGenre: string;
  films: Film [];
  promoFilm: Film | null;
  film: Film | null;
  similarFilms: Film [] | null;
  filmReviews: FilmReview [] | null;
  filmsShownCount: number;
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
  isDataUploading: boolean;
  userData: UserData | null;
  newReview: NewReview | null;
}

const initialState: InitialStateTypes = {
  selectedGenre: '',
  films: [],
  promoFilm: null,
  film: null,
  similarFilms: null,
  filmReviews: null,
  filmsShownCount: FILMS_SHOWN_COUNT,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  isDataUploading: false,
  userData: null,
  newReview: null,
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
    .addCase(setDataUploadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadFilmReviews, (state, action) => {
      state.filmReviews = action.payload;
    })
    .addCase(uploadNewReview, (state, action) => {
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
    });
});
