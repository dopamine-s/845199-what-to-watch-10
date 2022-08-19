import { useAppSelector } from '../../hooks/use-app-selector';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import { selectPromoFilm } from '../../store/promo-slice/select';

export default function PromoFilm(): JSX.Element {
  const promoFilm = useAppSelector(selectPromoFilm);

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img
          src={promoFilm?.backgroundImage}
          alt={promoFilm?.name}
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">

        <Logo light={false} />

        <UserBlock />

      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={promoFilm?.posterImage}
              alt={promoFilm?.name}
              width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">
              {promoFilm?.name}
            </h2>
            <p className="film-card__meta">
              <span className="film-card__genre">
                {promoFilm?.genre}
              </span>
              <span className="film-card__year">
                {promoFilm?.released}
              </span>
            </p>

            <div className="film-card__buttons">
              {promoFilm &&
                <FilmCardButtons film={promoFilm}/>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
