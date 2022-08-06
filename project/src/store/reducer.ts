import { createReducer } from '@reduxjs/toolkit';
import { setSelectedGenre, clearSelectedGenre, setDataLoadingStatus, loadFilms, loadPromoFilm, showMoreFilms, resetFilmsShownCount } from './actions';
import { Film } from '../types/films';
import { FILMS_SHOWN_COUNT } from '../constants';

type InitialStateTypes = {
  selectedGenre: string;
  films: Film [];
  promoFilm: Film | null;
  filmsShownCount: number;
  isDataLoading: boolean;
}

const initialState: InitialStateTypes = {
  selectedGenre: '',
  films: [],
  promoFilm: null,
  filmsShownCount: FILMS_SHOWN_COUNT,
  isDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectedGenre, (state, action) => {
      state.selectedGenre = action.payload;
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
    .addCase(clearSelectedGenre, (state) => {
      state.selectedGenre = '';
    })
    .addCase(showMoreFilms, (state) => {
      state.filmsShownCount += FILMS_SHOWN_COUNT;
    })
    .addCase(resetFilmsShownCount, (state) => {
      state.filmsShownCount = FILMS_SHOWN_COUNT;
    });
});
