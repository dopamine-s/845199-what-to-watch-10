import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, clearGenre, getFilms } from './actions';
import { Film } from '../types/films';

type initialStateTypes = {
  genre: string;
  films: Film [];
}

const initialState: initialStateTypes = {
  genre: '',
  films: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(clearGenre, (state) => {
      state.genre = '';
    });
});
