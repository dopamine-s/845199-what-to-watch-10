import Main from '../../pages/main/main';

type AppProps = {
  filmCardTitle: string;
  filmCardGenre: string;
  filmCardYear: number;
  filmCardCount: number;
  filmsList: string[];
}

function App (
  {filmCardCount,
    filmCardTitle,
    filmCardGenre,
    filmCardYear,
    filmsList
  }: AppProps): JSX.Element {

  return (
    <Main filmCardCount={filmCardCount}
      filmCardTitle={filmCardTitle}
      filmCardGenre={filmCardGenre }
      filmCardYear={filmCardYear}
      filmsList={filmsList}
    />
  );
}

export default App;
