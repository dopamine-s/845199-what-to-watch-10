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

export type NewReview = {
  id: string;
  comment: string;
  rating: number;
}
