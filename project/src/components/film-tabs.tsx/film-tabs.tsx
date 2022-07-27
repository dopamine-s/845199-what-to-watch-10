import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/films';
import { FilmReviews } from '../../types/reviews';
import { FilmTabName } from '../../constants';

import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import SingleFilmReviews from '../film-reviews/film-reviews';

type FilmTabsProps = {
  film: Film;
  filmsReviews: FilmReviews[];
}

export default function FilmTabs( { film, filmsReviews }: FilmTabsProps): JSX.Element {
  const FilmTabNames = Object.values(FilmTabName);
  const [activeTab, setActiveTab] = useState(FilmTabName.Overview);

  const renderTabs = (tab: string): JSX.Element => {
    switch (tab) {
      case FilmTabName.Overview:
        return <FilmOverview film={film} />;
      case FilmTabName.Details:
        return <FilmDetails film={film} />;
      default:
        return <SingleFilmReviews filmsReviews={filmsReviews} />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            Array.from({ length: FilmTabNames.length }, (_, index) => index)
              .map((number) => (
                <li key={number}
                  className={`film-nav__item ${activeTab === FilmTabNames[number] ? 'film-nav__item--active' : ''}`}
                >
                  <Link
                    className="film-nav__link"
                    onClick={() => setActiveTab(FilmTabNames[number])}
                    to=''
                  >
                    {`${FilmTabNames[number].slice(0, 1) + FilmTabNames[number].slice(1).toLowerCase()}`}
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
