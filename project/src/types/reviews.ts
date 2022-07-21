export type User = {
  id: number;
  name: string;
}

export type FilmReview = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}

export type FilmReviews = {
  filmId: number;
  reviews: FilmReview[];
}
