export default function Loader(): JSX.Element {
  return (
    <div className="loader">
      <p className="loader__text">Loading...</p>
      <div className="loader-dual-ring"></div>
    </div>
  );
}
