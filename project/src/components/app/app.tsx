import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import FilmPage from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { Film } from '../../types/films';
import { FilmReviews } from '../../types/reviews';
import { FilmInfo } from '../../types/film-info';

type AppProps = {
  filmInfo: FilmInfo;
  films: Film[];
  filmsReviews: FilmReviews[];
}

function App (
  { filmInfo,
    films,
    filmsReviews
  }: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path={AppRoute.Main}
          element={
            <Main
              filmInfo={filmInfo}
              films={films}
            />
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList
                films={films}
              />
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
                films={films}
                filmsReviews={filmsReviews}
              />
            }
          >
          </Route>
          <Route
            path=':id/review'
            element={
              <AddReview
                films={films}
              />
            }
          />
        </Route>

        <Route
          path={AppRoute.Player}
        >
          <Route
            path=':id'
            element={
              <Player
                films={films}
              />
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
