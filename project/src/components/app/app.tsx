import Main from '../../pages/main/main';

type AppProps = {
  filmCardTitle: string;
  filmCardGenre: string;
  filmCardYear: number;
  filmCardCount: number;
}

function App (
  {filmCardCount,
    filmCardTitle,
    filmCardGenre,
    filmCardYear,
  }: AppProps): JSX.Element {

  return (
    <Main filmCardCount={filmCardCount}
      filmCardTitle={filmCardTitle}
      filmCardGenre={filmCardGenre }
      filmCardYear={filmCardYear}
    />
  );
}

export default App;
