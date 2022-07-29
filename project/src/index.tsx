import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import { films } from './mocks/films';
import { filmsReviews } from './mocks/reviews';
import { filmInfo } from './mocks/film-info';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        filmInfo={filmInfo}
        films={films}
        filmsReviews={filmsReviews}
      />
    </Provider>
  </React.StrictMode>,
);
