import Main from '../../pages/main/main';

type AppProps = {
  filmCardCount: number;
}

function App ({filmCardCount}: AppProps): JSX.Element {
  return (
    <Main filmCardCount={filmCardCount} />
  );
}

export default App;
