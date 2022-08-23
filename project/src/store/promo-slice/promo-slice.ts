import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../constants';
import { Film } from '../../types/films';
import { fetchPromoFilmAction, sendFavoriteFilmStatusAction } from '../api-actions';

type PromoSliceTypes = {
  promoFilm: Film | null;
  isDataLoading: boolean;
}

const initialState: PromoSliceTypes = {
  promoFilm: null,
  isDataLoading: false,
};

export const promoSlice = createSlice({
  name: SliceName.Promo,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isDataLoading = false;
      })
      .addCase(sendFavoriteFilmStatusAction.fulfilled, (state, action) => {
        if (state.promoFilm?.id === action.payload.id) {
          state.promoFilm = action.payload;
        }
      });
  },
});
