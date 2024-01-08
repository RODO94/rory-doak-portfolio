import "./Header.scss";
import linkedIn from "../../assets/linkedin-34.svg";
import github from "../../assets/github-mark.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <a className="header-nav__link">Projects</a>
        <a className="header-nav__link">Experience</a>
      </nav>
      <div className="header__contact">
        <a
          className="header__contact-txt"
          href="https://www.linkedin.com/in/rory-doak/"
        >
          Contact
        </a>
      </div>
      <div className="header__icons">
        <a className="header__anchor" href="https://github.com/RODO94">
          <img src={github} alt="a logo for github" className="header__icon" />
        </a>
        <a
          className="header__anchor"
          href="https://www.linkedin.com/in/rory-doak/ "
        >
          <img
            src={linkedIn}
            alt="a logo for linkedin"
            className="header__icon"
          />
        </a>
      </div>
    </header>
  );
}
