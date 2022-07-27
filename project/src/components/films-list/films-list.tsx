import FilmCard from '../../components/film-card/film-card';
import { Film } from '../../types/films';
import { useState } from 'react';

type FilmsListProps = {
  films: Film[];
}

export default function FilmsList({ films }: FilmsListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);

  const filmCardMouseOverHandler = (filmId: number): void => setActiveFilm(filmId);

  const filmCardMouseOutHandler = (): void => setActiveFilm(null);

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
