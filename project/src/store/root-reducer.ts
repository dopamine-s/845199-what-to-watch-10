import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './auth-slice/auth-slice';
import { promoSlice } from './promo-slice/promo-slice';
import { filmsSlice } from './films-slice/films-slice';
import { favoriteSlice } from './favorite-slice/favorite-slice';
import { SliceName } from '../constants';

export const rootReducer = combineReducers({
  [SliceName.Auth]: authSlice.reducer,
  [SliceName.Promo]: promoSlice.reducer,
  [SliceName.Films]: filmsSlice.reducer,
  [SliceName.Favorite]: favoriteSlice.reducer,
});
