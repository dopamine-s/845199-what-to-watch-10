import { createReducer } from '@reduxjs/toolkit';
import { setSelectedGenre, clearSelectedGenre, getFilms } from './actions';
import { Film } from '../types/films';

type InitialStateTypes = {
  selectedGenre: string;
  films: Film [];
}

const initialState: InitialStateTypes = {
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
