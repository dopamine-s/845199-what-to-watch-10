import Main from '../../pages/main/main';

type AppProps = {
  filmCardTitle: string;
  filmCardGenre: string;
  filmCardYear: number;
  filmCardCount: number;
  smallFilmCardCount: number;
}

function App (
  {filmCardCount,
    smallFilmCardCount,
    filmCardTitle,
    filmCardGenre,
    filmCardYear
  }: AppProps): JSX.Element {

  return (
    <Main filmCardCount={filmCardCount}
      smallFilmCardCount={smallFilmCardCount}
      filmCardTitle={filmCardTitle}
      filmCardGenre={filmCardGenre }
      filmCardYear={filmCardYear}
    />
  );
}

export default App;
