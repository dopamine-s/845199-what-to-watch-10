import { createAction } from '@reduxjs/toolkit';
import { films } from '../mocks/films';

export const setSelectedGenre = createAction('films/changeGenre',
  (genre = '') => ({
    payload: genre,
  }));

export const clearSelectedGenre = createAction('films/clearGenre');

export const getFilms = createAction('films/getFilms',
  () => ({
    payload: films,
  }));

export const showMoreFilms = createAction('films/showMore');

export const resetFilmsShownCount = createAction('film/resetFilmsShownCount');
