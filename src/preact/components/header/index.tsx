import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

const Header: FunctionalComponent = () => {
  return (
    <header class={style.header}>
      <h1>Browser</h1>
      <nav>
        <Link activeClassName={style.active} href="/">
          Bookmark 1
        </Link>
      </nav>
    </header>
  );
};

export default Header;
