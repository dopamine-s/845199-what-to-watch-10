import FilmCard from '../../components/film-card/film-card';
import { Films } from '../../types/films';

type FilmsListProps = {
  films: Films
}

export default function FilmsList({films}: FilmsListProps): JSX.Element {
  const filmCards = films.map((film) => <FilmCard key={film.id} film={film} />);

  return (
    <div className="catalog__films-list">
      {filmCards}
    </div>
  );
}
