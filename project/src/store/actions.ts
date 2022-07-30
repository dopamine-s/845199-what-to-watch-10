import { createAction } from '@reduxjs/toolkit';
import { films } from '../mocks/films';

export const changeGenre = createAction ('films/changeGenre',
  (genreName = '') => ({
    payload: genreName,
  }));

export const clearGenre = createAction ('films/clearGenre');

export const getFilms = createAction('films/getFilms',
  () => ({
    payload: films,
  }));
