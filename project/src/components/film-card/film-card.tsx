import { Link, useNavigate } from 'react-router-dom';
import { Film } from '../../types/films';

type FilmCardProps = {
  film: Film;
  activeFilm: number | null;
  filmCardMouseOverHandler: (id: number) => void;
  filmCardMouseOutHandler: () => void;
}

export default function FilmCard({ film, activeFilm, filmCardMouseOverHandler, filmCardMouseOutHandler }: FilmCardProps): JSX.Element {
  const { id, name, previewImage } = film;
  const navigate = useNavigate();
  const mouseOverHandler = (): void => filmCardMouseOverHandler(id);

  return (
    <article className="small-film-card catalog__films-card"
      style={{ cursor: 'pointer'}}
      onClick={() => navigate(`/films/${film.id}`)}
      onMouseOver={mouseOverHandler}
      onMouseOut={filmCardMouseOutHandler}
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
