import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Film } from '../types/films';
import { FilmReview, NewReview } from '../types/reviews';
import { AuthorizationData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import {
  setDataLoadingStatus,
  setDataUploadingStatus,
  loadFilms,
  loadPromoFilm,
  loadFilm,
  loadSimilarFilms,
  loadFilmReviews,
  uploadNewReview,
  setAuthorizationStatus,
  setUserData,
  redirectToRoute
} from './actions';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../constants';
import { filterSimilarMovies } from '../utils/utils';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setDataLoadingStatus(true));
    const { data } = await api.get<Film[]>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchPromoFilm',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Film>(APIRoute.Promo);
    dispatch(loadPromoFilm(data));
  },
);

export const fetchFilmAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFilm',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);
    dispatch(loadFilm((data)));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchSimilarFilms',
  async ( id, { dispatch, extra: api }) => {
    const { data } = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
    dispatch(loadSimilarFilms(filterSimilarMovies(data, id)));
  },
);

export const fetchFilmReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFilmReviews',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmReview[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadFilmReviews((data)));
  },
);

export const sendNewReviewAction = createAsyncThunk<void, NewReview, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/sendNewReview',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    dispatch(setDataUploadingStatus(true));
    try {
      const { data } = await api.post<NewReview>(`${APIRoute.Comments}/${id}`, { comment, rating });
      dispatch(uploadNewReview((data)));
      dispatch(redirectToRoute(`${AppRoute.Film}/${id}`));
      dispatch(setDataUploadingStatus(false));
    } catch {
      dispatch(setDataUploadingStatus(false));
    }
  },
);

export const getUserDataAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthorizationData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(setUserData(data));
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);
