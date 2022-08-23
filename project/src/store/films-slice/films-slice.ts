import { createSlice } from '@reduxjs/toolkit';
import { SliceName, FILMS_SHOWN_COUNT } from '../../constants';
import { Film } from '../../types/films';
import { FilmReview, NewReview } from '../../types/reviews';
import {
  fetchFilmsAction,
  fetchFilmAction,
  fetchSimilarFilmsAction,
  fetchFilmReviewsAction,
  sendNewReviewAction,
  sendFavoriteFilmStatusAction
} from '../api-actions';


type FilmsSliceState = {
  selectedGenre: string;
  films: Film[];
  film: Film | null;
  similarFilms: Film[];
  filmReviews: FilmReview[];
  filmsShownCount: number;
  isFilmsDataLoading: boolean;
  isFilmDataLoading: boolean;
  isDataUploading: boolean;
  newReview: NewReview | null;
}

const initialState: FilmsSliceState = {
  selectedGenre: '',
  films: [],
  film: null,
  similarFilms: [],
  filmReviews: [],
  filmsShownCount: FILMS_SHOWN_COUNT,
  isFilmsDataLoading: false,
  isFilmDataLoading: false,
  isDataUploading: false,
  newReview: null,
};

export const filmsSlice = createSlice({
  name: SliceName.Films,
  initialState,
  reducers: {
    clearSelectedGenre: (state) => {
      state.selectedGenre = '';
    },
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    showMoreFilms: (state) => {
      state.filmsShownCount += FILMS_SHOWN_COUNT;
    },
    resetFilmsShownCount: (state) => {
      state.filmsShownCount = FILMS_SHOWN_COUNT;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmDataLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmDataLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchFilmReviewsAction.fulfilled, (state, action) => {
        state.filmReviews = action.payload;
      })
      .addCase(sendNewReviewAction.pending, (state) => {
        state.isDataUploading = true;
      })
      .addCase(sendNewReviewAction.fulfilled, (state, action) => {
        state.newReview = action.payload;
        state.isDataUploading = false;
      })
      .addCase(sendNewReviewAction.rejected, (state) => {
        state.newReview = null;
        state.isDataUploading = false;
      })
      .addCase(sendFavoriteFilmStatusAction.fulfilled, (state, action) => {

        const index = state.films.findIndex((movie) => movie.id === action.payload.id);

        state.films[index].isFavorite = action.payload.isFavorite;

        if (state.film?.id === action.payload.id) {
          state.film = action.payload;
        }
      });
  },
});

export const { clearSelectedGenre, setSelectedGenre, showMoreFilms, resetFilmsShownCount } = filmsSlice.actions;
