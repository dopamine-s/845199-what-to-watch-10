import FilmCard from '../../components/film-card/film-card';
import { Films } from '../../types/films';
import { useState } from 'react';

type FilmsListProps = {
  films: Films
}

export default function FilmsList({ films }: FilmsListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState <number | null> (null);

  const handleFilmCardMouseOver = (filmId: number): void =>
    setActiveFilm(filmId);
    // eslint-disable-next-line no-console
  console.log(activeFilm);

  const handleFilmCardMouseOut = (): void =>
    setActiveFilm(null);

  const filmCards = films.map((film) =>
    (
      <FilmCard
        key={film.id}
        film={film}
        // activeFilm={activeFilm}
        handleFilmCardMouseOver={handleFilmCardMouseOver}
        handleFilmCardMouseOut={handleFilmCardMouseOut}
      />
    ));

  return (
    <div className="catalog__films-list">
      {filmCards}
    </div>
  );
}
