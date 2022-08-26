import { State } from '../../types/state';
import { SliceName } from '../../constants';

export const selectPromoFilm = (state: State) => state[SliceName.Promo].promoFilm;

export const selectIsLoadingPromo = (state: State) => state[SliceName.Promo].isDataLoading;

export const selectIsErrorLoadingPromo = (state: State) => state[SliceName.Promo].isDataLoadingError;
