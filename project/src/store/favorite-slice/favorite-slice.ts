import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../constants';
import { Film } from '../../types/films';
import { fetchFavoriteFilmsAction } from '../api-actions';
import { logoutAction } from '../api-actions';

type FavoriteSliceTypes = {
  favoriteFilms: Film[];
  isFavoriteFilmsDataLoading: boolean;
  isFavoriteFilmsDataLoaded: boolean;
  isFavoriteFilmsDataLoadingError: boolean;
}

const initialState: FavoriteSliceTypes = {
  favoriteFilms: [],
  isFavoriteFilmsDataLoading: false,
  isFavoriteFilmsDataLoaded: false,
  isFavoriteFilmsDataLoadingError: false
};

export const favoriteSlice = createSlice({
  name: SliceName.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isFavoriteFilmsDataLoading = true;
        state.isFavoriteFilmsDataLoadingError = false;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isFavoriteFilmsDataLoading = false;
        state.isFavoriteFilmsDataLoaded = true;
        state.isFavoriteFilmsDataLoadingError = false;
      })
      .addCase(fetchFavoriteFilmsAction.rejected, (state) => {
        state.isFavoriteFilmsDataLoading = false;
        state.isFavoriteFilmsDataLoaded = false;
        state.isFavoriteFilmsDataLoadingError = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.favoriteFilms = [];
        state.isFavoriteFilmsDataLoaded = false;
      });
  },
});
