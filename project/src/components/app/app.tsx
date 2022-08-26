import { Routes, Route } from 'react-router-dom';
import { AppRoute} from '../../constants';
import { useAppSelector } from '../../hooks/use-app-selector';
import Loader from '../../pages/loader/loader';
import HistoryRouter from '../history-router/history-router';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import FilmPage from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { isAuthorizationStatusDefined } from '../../utils/utils';
import browserHistory from '../../browser-history';
import { selectAuthorizationStatus } from '../../store/auth-slice/select';
import { selectIsLoadingPromo, selectIsErrorLoadingPromo } from '../../store/promo-slice/select';
import { selectIsLoadingFilms, selectIsErrorLoadingFilms } from '../../store/films-slice/select';
import ServerError from '../server-error/server-error';

function App (): JSX.Element {
  const isLoadingFilms = useAppSelector(selectIsLoadingFilms);
  const isErrorLoadingFilms = useAppSelector(selectIsErrorLoadingFilms);
  const isLoadingPromo = useAppSelector(selectIsLoadingPromo);
  const isErrorLoadingPromo = useAppSelector(selectIsErrorLoadingPromo);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  if (!isAuthorizationStatusDefined(authorizationStatus) || isLoadingFilms || isLoadingPromo) {
    return (
      <Loader />
    );
  }

  if (isErrorLoadingFilms || isErrorLoadingPromo) {
    return (
      <ServerError />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>

        <Route
          path={AppRoute.Main}
          element={
            <Main />
          }
        />

        <Route
          path={AppRoute.SignIn}
          element={
            <SignIn />
          }
        />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Film}
        >
          <Route
            path=':id'
            element={
              <FilmPage />
            }
          >
          </Route>
          <Route
            path=':id/review'
            element={
              <PrivateRoute>
                <AddReview />
              </PrivateRoute>
            }
          />
        </Route>

        <Route
          path={AppRoute.Player}
        >
          <Route
            path=':id'
            element={
              <Player />
            }
          />
        </Route>

        <Route
          path='*'
          element={
            <NotFound />
          }
        />

      </Routes>
    </HistoryRouter>
  );
}

export default App;
