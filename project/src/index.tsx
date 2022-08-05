import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import { fetchFilmsAction } from './store/api-actions';
import { filmsReviews } from './mocks/reviews';
import { filmInfo } from './mocks/film-info';

store.dispatch(fetchFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        filmInfo={filmInfo}
        filmsReviews={filmsReviews}
      />
    </Provider>
  </React.StrictMode>,
);
