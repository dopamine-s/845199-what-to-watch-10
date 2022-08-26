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
  Comments = '/comments',
  Favorite = '/favorite'
}

export enum SliceName {
  Auth = 'AUTH',
  Promo = 'PROMO',
  Films = 'FILMS',
  Favorite = 'FAVORITE'
}

export const SignInRegExps = {
  Email: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
  Password: /^(?=^[a-zA-Z0-9]{2,}$)(?=.*\d)(?=.*[a-zA-Z]).*$/
};

export const FILMS_SHOWN_COUNT = 8;

export const BACKEND_URL = 'https://10.react.pages.academy/wtw';

export const REQUEST_TIMEOUT = 5000;

export const MAX_GENRE_FILTER_COUNT = 4;

export const FILM_LOADER_COLOR = '#eee5b5';

export const FILM_LOADER_SIZE = 100;

export const SECONDS_IN_HOUR = 3600;
