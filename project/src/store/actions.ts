import { createAction } from '@reduxjs/toolkit';
import { films } from '../mocks/films';

export const changeGenre = createAction ('films/changeGenre',
  (genreName = '') => ({
    payload: genreName,
  }));

export const getFilms = createAction('films/getFilms',
  () => ({
    payload: films,
  }));
