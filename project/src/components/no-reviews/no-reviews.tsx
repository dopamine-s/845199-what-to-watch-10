export default function NoReviews(): JSX.Element {
  return (
    <div
      className="film-card__reviews film-card__row"
      style={{
        background: '#ffffff',
      }}
    >
      <h2
        style={{
          fontSize: '25px',
          display: 'block',
          fontWeight: 'normal',
          color: 'black',
          margin: '100px auto 100px 55px',
          padding: '20px'
        }}
      >
         No reviews so far...
      </h2>
    </div>
  );
}
