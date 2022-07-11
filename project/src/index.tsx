import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { FilmsList } from './components/small-film-card/small-film-card-info';

const CountSetting = {
  FILM_CARD_COUNT: 9,
};

const FilmInfo = {
  FILM_CARD_TITLE: 'The Grand Budapest Hotel',
  FILM_CARD_GENRE: 'Drama',
  FILM_CARD_YEAR: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      filmCardCount={CountSetting.FILM_CARD_COUNT}
      filmCardTitle={FilmInfo.FILM_CARD_TITLE}
      filmCardGenre={FilmInfo.FILM_CARD_GENRE}
      filmCardYear={FilmInfo.FILM_CARD_YEAR}
      filmsList={FilmsList}
    />
  </React.StrictMode>,
);
