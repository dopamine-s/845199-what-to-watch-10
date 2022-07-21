import { Link, useNavigate } from 'react-router-dom';
import { Film } from '../../types/films';

type FilmCardProps = {
  film: Film;
  // activeFilm: number | null;
  handleFilmCardMouseOver: (id: number) => void;
  handleFilmCardMouseOut: () => void;
}

export default function FilmCard({ film, handleFilmCardMouseOver, handleFilmCardMouseOut }: FilmCardProps): JSX.Element {
  const { id, name, previewImage } = film;
  const navigate = useNavigate();

  return (
    <article className="small-film-card catalog__films-card" style={{ cursor: 'pointer'}} onClick={() => navigate(`/films/${film.id}`)}
      onMouseOver={() => handleFilmCardMouseOver(id)}
      onMouseOut={handleFilmCardMouseOut}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`../films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}
