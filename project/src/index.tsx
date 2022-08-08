import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import { fetchFilmsAction, fetchPromoFilmAction } from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';
import { filmsReviews } from './mocks/reviews';
import { checkAuthAction } from './store/api-actions';

store.dispatch(checkAuthAction());

store.dispatch(fetchFilmsAction());

store.dispatch(fetchPromoFilmAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        filmsReviews={filmsReviews}
      />
    </Provider>
  </React.StrictMode>,
);
