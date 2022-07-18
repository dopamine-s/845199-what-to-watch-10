import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { Films } from '../../types/films';

type AppProps = {
  filmCardTitle: string;
  filmCardGenre: string;
  filmCardYear: number;
  filmCardCount: number;
  films: Films;
}

function App (
  {filmCardCount,
    filmCardTitle,
    filmCardGenre,
    filmCardYear,
    films,
  }: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path={AppRoute.Main}
          element={
            <Main
              filmCardCount={filmCardCount}
              filmCardTitle={filmCardTitle}
              filmCardGenre={filmCardGenre}
              filmCardYear={filmCardYear}
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Film}
        >
          <Route
            path=':id'
          >
            <Route
              index element={<Film />}
            />
            <Route
              path={AppRoute.AddReview}
              element={
                <AddReview />
              }
            />
          </Route>
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
