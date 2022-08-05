import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Film } from '../types/films';
import { setDataLoadedStatus, loadFilms, loadPromoFilm } from './actions';
import { APIRoute } from '../constants';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setDataLoadedStatus(true));
    const { data } = await api.get<Film[]>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(setDataLoadedStatus(false));
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
