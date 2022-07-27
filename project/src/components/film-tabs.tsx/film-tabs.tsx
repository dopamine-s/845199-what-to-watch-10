import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/films';
import { FilmReviews } from '../../types/reviews';
import { filmTabNames } from '../../constants';

import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import SingleFilmReviews from '../film-reviews/film-reviews';

type FilmTabsProps = {
  film: Film;
  filmsReviews: FilmReviews[];
}

export default function FilmTabs( { film, filmsReviews }: FilmTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(filmTabNames[0]);

  const renderTabs = (tab: string): JSX.Element => {
    switch (tab) {
      case 'Details':
        return <FilmDetails film={film} />;
      case 'Reviews':
        return <SingleFilmReviews filmsReviews={filmsReviews} />;
      case 'Overview':
      default:
        return <FilmOverview film={film} />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            filmTabNames.map((filmTabName) => (
              <li key={filmTabName}
                className={`film-nav__item ${activeTab === filmTabName ? 'film-nav__item--active' : ''}`}
              >
                <Link
                  className="film-nav__link"
                  onClick={() => setActiveTab(filmTabName)}
                  to=''
                >
                  {filmTabName}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
      {renderTabs(activeTab)}
    </div>
  );
}
