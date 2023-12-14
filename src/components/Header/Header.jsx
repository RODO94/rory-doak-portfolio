import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <a className="header-nav__link">About</a>
        <a className="header-nav__link">Projects</a>
        <a className="header-nav__link">Experience</a>
      </nav>
      <div className="header__contact">
        <a className="header__contact-txt">Contact</a>
      </div>
      <div className="header__icons">
        <a className="header__linkedin">
          <img src="" alt="" className="header__icon" />
        </a>
        <a className="header__github">
          <img src="" alt="" className="header__icon" />
        </a>
      </div>
    </header>
  );
}
