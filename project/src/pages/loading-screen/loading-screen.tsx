export default function LoadingScreen(): JSX.Element {
  return (
    <div className="loader">
      <p className="loader__text">Loading...</p>
      <div className="loader__lds-dual-ring"></div>
    </div>
  );
}
