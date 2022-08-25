import { CSSProperties, useRef, useState, useEffect, ChangeEvent } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import NotFound from '../not-found/not-found';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectFilms } from '../../store/films-slice/select';
import { FILM_LOADER_COLOR, FILM_LOADER_SIZE } from '../../constants';
import { getFilmTimeLeft } from '../../utils/utils';

const cssOverride: CSSProperties = {
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function Player(): JSX.Element {
  const allFilms = useAppSelector(selectFilms);
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const film = allFilms.find((movie) => String(movie.id) === id);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [duration, setDurationTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

  }, [isPlaying, videoRef]);

  const handlePlayerTogglePlayModeClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMetadataLoaded = (evt: React.SyntheticEvent<HTMLVideoElement>) => {
    setDurationTime(evt.currentTarget.duration);
    setIsPlaying(true);
  };

  const handleTimeUpdate = (evt: React.SyntheticEvent<HTMLVideoElement>) => {
    setCurrentTime(evt.currentTarget.currentTime);
  };

  const handleFilmProgressSet = (evt: ChangeEvent<HTMLInputElement>) => {
    const setProgressChange = Number(evt.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = (videoRef.current?.duration / 100) * setProgressChange;
      setCurrentTime(setProgressChange);
    }
  };


  const handleFullScreenModeToggleClick = () => {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  if (!film) {
    return (
      <NotFound />
    );
  }

  return (
    <div className="player">
      <ClipLoader
        cssOverride={cssOverride}
        color={FILM_LOADER_COLOR}
        loading={isLoading}
        size={FILM_LOADER_SIZE}
      />

      <video
        src={film.videoLink}
        ref={videoRef}
        className="player__video"
        poster={film.previewImage}
        autoPlay
        onLoadStart={() => setIsLoading(true)}
        onLoadedData={() => setIsLoading(false)}
        onLoadedMetadata={handleMetadataLoaded}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onSeeking={() => setIsLoading(true)}
        onSeeked={() => setIsLoading(false)}
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

            <progress
              className="player__progress"
              value={Math.floor(currentTime * 100 / duration)}
              max="100"
            >
            </progress>

            <input
              className="player__progress player__progress--input"
              style={{
                left: `${currentTime * 100 / duration}%`,
              }}
              type="range"
              min="0"
              max="100"
              value={Math.floor(currentTime * 100 / duration)}
              onChange={(evt) => handleFilmProgressSet(evt)}
            />

          </div>

          <div className="player__time-value">
            {`-${getFilmTimeLeft(duration - currentTime)}`}
          </div>

        </div>

        <div className="player__controls-row">

          <button
            type="button"
            className="player__play"
            onClick={handlePlayerTogglePlayModeClick}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              {
                isPlaying
                  ? <use xlinkHref="#pause"></use>
                  : <use xlinkHref="#play-s"></use>
              }
            </svg>
            <span>Play</span>
          </button>

          <div className="player__name">{film.name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={handleFullScreenModeToggleClick}
          >
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
