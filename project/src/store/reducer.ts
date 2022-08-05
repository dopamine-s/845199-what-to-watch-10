import { createReducer } from '@reduxjs/toolkit';
import { setSelectedGenre, clearSelectedGenre, setDataLoadedStatus, loadFilms, loadPromoFilm, showMoreFilms, resetFilmsShownCount } from './actions';
import { Film } from '../types/films';
import { FILMS_SHOWN_COUNT } from '../constants';

type InitialStateTypes = {
  selectedGenre: string;
  films: Film [];
  promoFilm: Film;
  filmsShownCount: number;
  isDataLoaded: boolean;
}

const initialState: InitialStateTypes = {
  selectedGenre: '',
  films: [],
  promoFilm: {} as Film,
  filmsShownCount: FILMS_SHOWN_COUNT,
  isDataLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectedGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
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
