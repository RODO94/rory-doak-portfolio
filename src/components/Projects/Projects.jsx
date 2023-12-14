import "./Projects.scss";
import coinOne from "../../assets/coin-1.jpg";

export default function Projects() {
  return (
    <section className="projects">
      <article className="projects__technologies">
        <h2 className="projects__title">My Latest Work</h2>
        <div className="projects__tech-wrap">
          <div className="projects__tech-list">
            <div className="projects__sections">
              <div className="projects__subtitle-wrap">
                <h3 className="projects__subtitle">Front-End</h3>
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
                <h3 className="projects__subtitle">Back-End</h3>
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
        <p className="projects__info">
          Completed as the final Capstone project of a BrainStation Software
          Engineering bootcamp. Coin is the culmination of everything I learned
          over the 12-week bootcamp.
        </p>
      </article>
      <article className="projects__project">
        <div className="projects__wrap">
          <div className="projects__header">
            <div className="projects__header-container">
              <h2 className="projects__name">Coin</h2>
            </div>
            <div className="projects__header-container">
              <p className="projects__description">
                See how much money your connections have and how you compare...
              </p>
            </div>
          </div>
          <div className="projects__image-wrap">
            <img
              className="projects__img"
              src={coinOne}
              alt="dashboard of the coin app"
            />
          </div>
        </div>
      </article>
    </section>
  );
}
