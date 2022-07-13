import { Link } from 'react-router-dom';

type LogoProps = {
  light: boolean;
  isNotMain: boolean;
}

export default function Logo({ light, isNotMain }: LogoProps): JSX.Element {
  return (
    <div className="logo">
      { isNotMain ?
        <Link className={`logo__link${light ? ' logo__link--light' : ''}`} to='/'>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
        :
        <a href = "/" className={`logo__link${light ? ' logo__link--light' : ''}`}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>}
    </div>
  );
}
