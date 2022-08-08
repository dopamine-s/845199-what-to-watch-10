import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { useAppSelector } from '../../hooks';
import Loader from '../../pages/loader/loader';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import FilmPage from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { FilmReviews } from '../../types/reviews';
import { isCheckedAuthorization } from '../../utils/utils';

type AppProps = {
  filmsReviews: FilmReviews[];
}

function App (
  { filmsReviews }: AppProps): JSX.Element {
  const {authorizationStatus, isDataLoading} = useAppSelector((state) => state);

  if (isCheckedAuthorization(authorizationStatus) || isDataLoading) {
    return (
      <Loader />
    );
  }

  return (
    <BrowserRouter>
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
            <PrivateRoute authorizationStatus={authorizationStatus}>
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
              <FilmPage
                filmsReviews={filmsReviews}
              />
            }
          >
          </Route>
          <Route
            path=':id/review'
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
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
    </BrowserRouter>
  );
}

export default App;
