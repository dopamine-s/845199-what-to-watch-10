import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { Film } from '../types/films';
import { AuthorizationStatus, MAX_GENRE_FILTER_COUNT, SECONDS_IN_HOUR, SignInRegExps } from '../constants';

dayjs.extend(duration);

export const getFilmRateLevel = (filmRate: number): string => {
  if (filmRate >= 0 && filmRate <= 3) {
    return 'Bad';
  } else if (filmRate > 3 && filmRate <= 5) {
    return 'Normal';
  } else if (filmRate > 5 && filmRate <= 8) {
    return 'Good';
  } else if (filmRate > 8 && filmRate < 10) {
    return 'Very good';
  } else if (filmRate === 10) {
    return 'Awesome';
  }
  return '';
};

export const getTimeFromMins = (mins: number): string => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
};

export const getFilmTimeLeft = (playtime: number) => {
  const durationTime = dayjs.duration(playtime, 'seconds');

  if ((SECONDS_IN_HOUR / playtime) > 1) {
    return durationTime.format('mm[:]ss');
  }

  return durationTime.format('H[:]mm[:]ss');
};

export const humanizeDayDate = (data: string): string => dayjs(data).format('MMMM D, YYYY');

export const getReviewDateTime = (data: string): string => dayjs(data).format('YYYY-MM-DD');

export const getGenres = (filmList: Film[]): string[] =>
  [...new Set(filmList.map((film) => film.genre))];

export const isAuthorizationStatusDefined = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus !== AuthorizationStatus.Unknown;

export const filterSimilarMovies = (data: Film[], id: string): Film[] =>
  data.slice(0, MAX_GENRE_FILTER_COUNT).filter((movie) => String(movie.id) !== id);

export const isEmailValid = (value: string): boolean => SignInRegExps.Email.test(value);
export const isPasswordValid = (value: string): boolean => SignInRegExps.Password.test(value);
