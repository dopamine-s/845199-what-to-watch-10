import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import { fetchFilmsAction, fetchPromoFilmAction } from './store/api-actions';
import { filmsReviews } from './mocks/reviews';

store.dispatch(fetchFilmsAction());

store.dispatch(fetchPromoFilmAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        filmsReviews={filmsReviews}
      />
    </Provider>
  </React.StrictMode>,
);
