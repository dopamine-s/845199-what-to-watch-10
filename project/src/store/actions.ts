import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/films';
import { FilmReview} from '../types/reviews';
import { NewReview } from '../types/reviews';
import { UserData } from '../types/user-data';
import { AuthorizationStatus } from '../constants';

export const setSelectedGenre = createAction('films/changeGenre',
  (genre = '') => ({
    payload: genre,
  }));

export const clearSelectedGenre = createAction('films/clearGenre');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const setReviewUploadingStatus = createAction<boolean>('data/setReviewUploadingStatus');

export const setFilms = createAction<Film[]>('films/setFilms');

export const setPromoFilm = createAction<Film>('films/setPromoFilm');

export const setFilm = createAction<Film>('films/setFilm');

export const setSimilarFilms = createAction<Film[]>('films/setSimilarFilms');

export const setFilmReviews = createAction<FilmReview[]>('films/setFilmReviews');

export const setNewReview = createAction<NewReview>('films/setNewReview');

export const showMoreFilms = createAction('films/showMore');

export const resetFilmsShownCount = createAction('films/resetFilmsShownCount');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const setUserData = createAction<UserData>('user/setUserData');

export const redirectToRoute = createAction<string>('films/redirectToRoute');

export const setLoginError = createAction('user/setLoginError');

export const clearLoginError = createAction('user/clearLoginError');
