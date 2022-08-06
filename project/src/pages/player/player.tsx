import NotFound from '../not-found/not-found';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

export default function Player(): JSX.Element {
  const allFilms = useAppSelector((state) => state.films);
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const film = allFilms.find((movie) => String(movie.id) === id);

  if (!film) {
    return (
      <NotFound />
    );
  }

  return (
    <div className="player">
      <video
        src={film.videoLink}
        className="player__video"
        poster={film.previewImage}
      >
      </video>

      <button
        onClick={() => navigate(-1)}
        type="button"
        className="player__exit"
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler"
              style={{
                left: '30%',
              }}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
