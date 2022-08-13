import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import { fetchFilmsAction, fetchPromoFilmAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import { getUserDataAction } from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(getUserDataAction());

store.dispatch(fetchFilmsAction());

store.dispatch(fetchPromoFilmAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
);
