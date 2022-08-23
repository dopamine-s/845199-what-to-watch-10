import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../constants';
import { Film } from '../../types/films';
import { fetchFavoriteFilmsAction } from '../api-actions';
import { logoutAction } from '../api-actions';

type FavoriteSliceTypes = {
  favoriteFilms: Film[];
  isFavoriteFilmsDataLoading: boolean;
}

const initialState: FavoriteSliceTypes = {
  favoriteFilms: [],
  isFavoriteFilmsDataLoading: false,
};

export const favoriteSlice = createSlice({
  name: SliceName.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isFavoriteFilmsDataLoading = true;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isFavoriteFilmsDataLoading = false;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.favoriteFilms = [];
      });
  },
});
