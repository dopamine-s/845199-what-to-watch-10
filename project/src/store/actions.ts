import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/films';

export const setSelectedGenre = createAction('films/changeGenre',
  (genre = '') => ({
    payload: genre,
  }));

export const clearSelectedGenre = createAction('films/clearGenre');

export const loadFilms = createAction<Film[]>('films/loadFilms');

export const showMoreFilms = createAction('films/showMore');

export const resetFilmsShownCount = createAction('films/resetFilmsShownCount');
