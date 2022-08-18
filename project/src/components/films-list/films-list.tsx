import FilmCard from '../../components/film-card/film-card';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { Film } from '../../types/films';
import { useState, memo } from 'react';

type FilmsListProps = {
  films: Film[];
  showButton: boolean;
}

function FilmsList({ films, showButton }: FilmsListProps): JSX.Element {
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
      {showButton && <ShowMoreButton />}
    </div>
  );
}

export default memo(FilmsList);
