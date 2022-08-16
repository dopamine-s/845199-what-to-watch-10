import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { useAppSelector } from '../../hooks';
import Loader from '../../pages/loader/loader';
import HistoryRouter from '../history-route/history-route';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import FilmPage from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { isAuthorized } from '../../utils/utils';
import browserHistory from '../../browser-history';

function App (): JSX.Element {
  const {authorizationStatus, isDataLoading} = useAppSelector((state) => state);

  if (isAuthorized(authorizationStatus) || isDataLoading) {
    return (
      <Loader />
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
