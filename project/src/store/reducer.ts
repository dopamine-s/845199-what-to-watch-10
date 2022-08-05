import { createReducer } from '@reduxjs/toolkit';
import { setSelectedGenre, clearSelectedGenre, loadFilms, showMoreFilms, resetFilmsShownCount } from './actions';
import { Film } from '../types/films';
import { FILMS_SHOWN_COUNT } from '../constants';

type InitialStateTypes = {
  selectedGenre: string;
  films: Film [];
  filmsShownCount: number;
}

const initialState: InitialStateTypes = {
  selectedGenre: '',
  films: [],
  filmsShownCount: FILMS_SHOWN_COUNT,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectedGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
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
