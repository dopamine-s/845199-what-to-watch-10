import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/films';

export const setSelectedGenre = createAction('films/changeGenre',
  (genre = '') => ({
    payload: genre,
  }));

export const clearSelectedGenre = createAction('films/clearGenre');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const loadFilms = createAction<Film[]>('films/loadFilms');

export const loadPromoFilm = createAction<Film>('films/loadPromoFilm');

export const showMoreFilms = createAction('films/showMore');

export const resetFilmsShownCount = createAction('films/resetFilmsShownCount');
