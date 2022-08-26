import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../constants';
import { Film } from '../../types/films';
import { fetchPromoFilmAction, sendFavoriteFilmStatusAction } from '../api-actions';

type PromoSliceTypes = {
  promoFilm: Film | null;
  isDataLoading: boolean;
  isDataLoadingError: boolean;
}

const initialState: PromoSliceTypes = {
  promoFilm: null,
  isDataLoading: false,
  isDataLoadingError: false
};

export const promoSlice = createSlice({
  name: SliceName.Promo,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isDataLoading = true;
        state.isDataLoadingError = false;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isDataLoading = false;
        state.isDataLoadingError = false;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.isDataLoading = false;
        state.isDataLoadingError = true;
      })
      .addCase(sendFavoriteFilmStatusAction.fulfilled, (state, action) => {
        if (state.promoFilm?.id === action.payload.id) {
          state.promoFilm = action.payload;
        }
      });
  },
});
