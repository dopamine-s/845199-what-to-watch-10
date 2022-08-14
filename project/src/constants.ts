export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films',
  AddReview = 'review',
  Player = '/player',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const filmTabNames = [
  'Overview',
  'Details',
  'Reviews'
];

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments'
}

export const FILMS_SHOWN_COUNT = 8;

export const BACKEND_URL = 'https://10.react.pages.academy/wtw';

export const REQUEST_TIMEOUT = 5000;

export const MAX_GENRE_FILTER_COUNT = 4;

export const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export const TIMEOUT_SHOW_ERROR = 10000;
