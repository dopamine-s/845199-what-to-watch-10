import FilmCard from '../../components/film-card/film-card';
import { Film } from '../../types/films';
import { useState } from 'react';

const MAX_GENRE_FILTER_COUNT = 4;

type FilmsListProps = {
  films: Film[];
  genre?: string;
  id?: number;
}

export default function FilmsList({ films, genre, id }: FilmsListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);

  const filmCardMouseOverHandler = (filmId: number): void => setActiveFilm(filmId);

  const filmCardMouseOutHandler = (): void => setActiveFilm(null);

  if (genre) {
    const filmsFilteredByGenre = films.filter((film) => film.genre === genre).slice(0, MAX_GENRE_FILTER_COUNT);
    films = filmsFilteredByGenre;
    const filmsExceptSampleFilm = films.filter((movie) => movie.id !== id);
    films = filmsExceptSampleFilm;
  }

  const filmCards = films.map((film) =>
    (
      <FilmCard
        key={film.id}
        film={film}
        activeFilm={activeFilm}
        filmCardMouseOverHandler={filmCardMouseOverHandler}
        filmCardMouseOutHandler={filmCardMouseOutHandler}
      />
    ));

  return (
    <div className="catalog__films-list">
      {filmCards}
    </div>
  );
}
