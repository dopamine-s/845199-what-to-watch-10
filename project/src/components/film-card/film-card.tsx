import { Link, useNavigate } from 'react-router-dom';
import { Film } from '../../types/films';
import { AppRoute } from '../../constants';
import VideoPlayer from '../../components/video-player/video-player';

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
  const articleStyle = {
    cursor: 'pointer',
    width: '280px',
    height: '175px'
  };

  return (
    <article className="small-film-card catalog__films-card"
      style={articleStyle}
      onClick={() => navigate(`${AppRoute.Film}/${id}`)}
      onMouseOver={mouseOverHandler}
      onMouseOut={filmCardMouseOutHandler}
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
