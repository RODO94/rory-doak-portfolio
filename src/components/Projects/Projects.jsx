import "./Projects.scss";
import coinOne from "../../assets/coin-1.jpg";
import CoinOne from "../CoinOne/CoinOne";
import { useState } from "react";
import CoinTwo from "../CoinTwo/CoinTwo";

export default function Projects() {
  const [projectCarousel, setProjectCarousel] = useState(1);
  const [userControl, setUserControl] = useState(false);

  let carousel =
    projectCarousel === 1 ? (
      <CoinOne />
    ) : projectCarousel === 2 ? (
      <CoinTwo />
    ) : (
      <CoinOne />
    );

  setTimeout(() => {
    if (!userControl) {
      setProjectCarousel(2);
    }
  }, 25000);

  const handleBack = () => {
    if (projectCarousel === 1) {
      return;
    }
    setUserControl(true);
    return setProjectCarousel(1);
  };

  const handleForward = () => {
    if (projectCarousel === 2) {
      return;
    }
    setUserControl(true);
    return setProjectCarousel(2);
  };

  return (
    <section className="projects" id="projects">
      <article className="projects__technologies">
        <div className="projects__tech-wrap">
          <div className="projects__tech-list">
            <div className="projects__sections">
              <h2 className="projects__subheader">Coin - AI Finance App</h2>
              <p className="projects__info">
                Coin is a speculative finance app to help improve conversations
                around personal finance. <br />
                <br /> Completed as the final Capstone project of a BrainStation
                Software Engineering bootcamp. Coin is the culmination of
                everything I learned over the 12-week bootcamp.
              </p>
              <div className="projects__subtitle-wrap">
                <h3 className="projects__subtitle">Frontend</h3>
              </div>
              <div className="projects__list">
                <p className="projects__tech">HTML5</p>
                <p className="projects__tech">CSS</p>
                <p className="projects__tech">SASS</p>
                <p className="projects__tech">JavaScript</p>
                <p className="projects__tech">React</p>
              </div>
            </div>
            <div className="projects__sections">
              <div className="projects__subtitle-wrap">
                <h3 className="projects__subtitle">Backend</h3>
              </div>
              <div className="projects__list">
                <p className="projects__tech">NodeJS</p>
                <p className="projects__tech">ExpressJS</p>
                <p className="projects__tech">Knex</p>
                <p className="projects__tech">MySQL</p>
              </div>
            </div>
            <div className="projects__sections">
              <div className="projects__subtitle-wrap">
                <h3 className="projects__subtitle">APIs</h3>
              </div>
              <div className="projects__list">
                <p className="projects__tech">OpenAI Assistants API</p>
                <p className="projects__tech">Monzo API</p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="projects__project">
        <h2 className="projects__title">My Latest Work</h2>
        {carousel}
        <div className="projects__button-wrap">
          <button
            onClick={handleBack}
            className={
              projectCarousel === 1
                ? "projects__button projects__button--hide"
                : "projects__button"
            }
          >
            {" "}
            {"<"}
          </button>
          <button
            onClick={handleForward}
            className={
              projectCarousel === 2
                ? "projects__button projects__button--hide"
                : "projects__button"
            }
          >
            {" "}
            {">"}
          </button>
        </div>
      </article>
    </section>
  );
}
