export type User = {
  id: number;
  name: string;
}

export type FilmReview = {
  comment: string;
  date: string;
  id: number;
  user: User;
}
