import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Film } from '../types/films';
import { FilmStatus } from '../types/film-status.js';
import { FilmReview, NewReview } from '../types/reviews';
import { AuthorizationData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { redirectToRoute } from './actions';
import { saveToken, dropToken } from '../services/token';
import { clearLoginError } from '../store/auth-slice/auth-slice';
import { APIRoute, AppRoute } from '../constants';
import { filterSimilarMovies } from '../utils/utils';

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

export const fetchFavoriteFilmsAction = createAsyncThunk<Film[], undefined, {
  state: State,
  extra: AxiosInstance
}>(
  'favorite/fetchFavoriteFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film[]>(APIRoute.Favorite);
    return (data);
  },
);

export const sendFavoriteFilmStatusAction = createAsyncThunk<Film, FilmStatus, {
  state: State,
  extra: AxiosInstance
}>(
  'favorite/sendFavoriteFilmStatus',
  async ({ id, status }, { extra: api }) => {
    const { data } = await api.post<Film>(`${APIRoute.Favorite}/${id}/${status}`);
    return data;
  }
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

export const loginAction = createAsyncThunk<UserData | null, AuthorizationData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'auth/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(clearLoginError());
    return data;
  }
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
