import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';
import { filmsReviews } from './mocks/reviews';
import { filmInfo } from './mocks/film-info';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      filmInfo={filmInfo}
      films={films}
      filmsReviews={filmsReviews}
    />
  </React.StrictMode>,
);
