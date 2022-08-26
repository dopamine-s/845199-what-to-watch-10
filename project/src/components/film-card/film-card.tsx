import { Link, useNavigate } from 'react-router-dom';
import { Film } from '../../types/films';
import { AppRoute } from '../../constants';
import VideoPlayer from '../../components/video-player/video-player';

type FilmCardProps = {
  film: Film;
  activeFilm: number | null;
  onFilmCardMouseOverHandler: (id: number) => void;
  onFilmCardMouseOutHandler: () => void;
}

export default function FilmCard({ film, activeFilm, onFilmCardMouseOverHandler, onFilmCardMouseOutHandler }: FilmCardProps): JSX.Element {
  const { id, name, previewImage } = film;
  const navigate = useNavigate();
  const handleMouseOver = (): void => onFilmCardMouseOverHandler(id);
  const handleMouseOut = onFilmCardMouseOutHandler;

  return (
    <article className="small-film-card catalog__films-card"
      onClick={() => navigate(`${AppRoute.Film}/${id}`)}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="small-film-card__image">
        {activeFilm === id ? (
          <VideoPlayer film={film}
            activeFilm={activeFilm}
          />
        ) : (
          <img src={previewImage} alt={name} width="280" height="175" />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}
