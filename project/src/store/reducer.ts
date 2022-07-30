import { createReducer } from '@reduxjs/toolkit';
import { setSelectedGenre, clearSelectedGenre, getFilms } from './actions';
import { Film } from '../types/films';

type initialStateTypes = {
  selectedGenre: string;
  films: Film [];
}

const initialState: initialStateTypes = {
  selectedGenre: '',
  films: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectedGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(getFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(clearSelectedGenre, (state) => {
      state.selectedGenre = '';
    });
});
