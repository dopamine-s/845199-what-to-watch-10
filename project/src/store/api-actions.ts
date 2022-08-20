import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Film } from '../types/films';
import { FilmReview, NewReview } from '../types/reviews';
import { AuthorizationData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { redirectToRoute } from './actions';
import { saveToken, dropToken } from '../services/token';
import { clearLoginError } from '../store/auth-slice/auth-slice';
import { APIRoute, AppRoute, TIMEOUT_SHOW_ERROR } from '../constants';
import { filterSimilarMovies } from '../utils/utils';
import { store } from '../store/index';

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, {
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film[]>(APIRoute.Films);
    return data;
  },
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  state: State,
  extra: AxiosInstance
}>(
  'promo/fetchPromoFilm',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film>(APIRoute.Promo);
    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<Film, string, {
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFilm',
  async (id, { extra: api }) => {
    const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<Film[], string, {
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchSimilarFilms',
  async ( id, { extra: api }) => {
    const { data } = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
    return filterSimilarMovies(data, id);
  },
);

export const fetchFilmReviewsAction = createAsyncThunk<FilmReview[], string, {
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFilmReviews',
  async (id, { extra: api }) => {
    const { data } = await api.get<FilmReview[]>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const sendNewReviewAction = createAsyncThunk<NewReview, NewReview, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/sendNewReview',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    const { data } = await api.post<NewReview>(`${APIRoute.Comments}/${id}`, { comment, rating });
    dispatch(redirectToRoute(`${AppRoute.Film}/${id}`));
    return data;
  },
);

export const getUserDataAction = createAsyncThunk<UserData, void, {
  state: State,
  extra: AxiosInstance
}>(
  'auth/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Login);
    return data;
  },
);

export const clearLoginErrorAction = createAsyncThunk(
  'auth/clearLoginError',
  () => {
    setTimeout(
      () => store.dispatch(clearLoginError()),
      TIMEOUT_SHOW_ERROR
    );
  }
);

export const loginAction = createAsyncThunk<void, AuthorizationData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'auth/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      dispatch(clearLoginError());
    } catch {
      clearLoginErrorAction();
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State,
  extra: AxiosInstance
}>(
  'auth/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
