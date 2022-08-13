import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/films';
import { FilmReview} from '../types/reviews';
import { UserData } from '../types/user-data';
import { AuthorizationStatus } from '../constants';

export const setSelectedGenre = createAction('films/changeGenre',
  (genre = '') => ({
    payload: genre,
  }));

export const clearSelectedGenre = createAction('films/clearGenre');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const loadFilms = createAction<Film[]>('films/loadFilms');

export const loadPromoFilm = createAction<Film>('films/loadPromoFilm');

export const loadFilm = createAction<Film>('films/loadFilm');

export const loadSimilarFilms = createAction<Film[]>('films/loadSimilarFilms');

export const loadFilmReviews = createAction<FilmReview[]>('films/loadFilmReviews');

export const showMoreFilms = createAction('films/showMore');

export const resetFilmsShownCount = createAction('films/resetFilmsShownCount');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const setUserData = createAction<UserData>('user/setUserData');
