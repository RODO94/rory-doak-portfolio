import "./ExperienceList.scss";

export default function ExperienceList() {
  return (
    <>
      <article className="experience">
        <div className="experience__section">
          <h3 className="experience__subheader">Role</h3>
          <p className="experience__text">Project Manager</p>
          <p className="experience__text">Stora Enso</p>
          <p className="experience__text">2020 - 2023</p>
          <img src="" alt="" />
        </div>
        <div className="experience__section">
          <h3 className="experience__subheader">What I Valued</h3>
          <p className="experience__text">
            The chance to create and deliver user centred projects with on going
            retrospectives and clear service architecture
          </p>
        </div>
        <div className="experience__section">
          <h3 className="experience__subheader">Tools + Methods</h3>
          <ul className="experience__list">
            <li className="experience__item">Miro + Figma</li>
            <li className="experience__item">Azure DevOps</li>
            <li className="experience__item">UX Heuristic Testing</li>
            <li className="experience__item">Service Design</li>
            <li className="experience__item">Systems Thinking</li>
            <li className="experience__item">Agile Project Delivery</li>
          </ul>
        </div>
      </article>{" "}
      <article className="experience">
        <div className="experience__section">
          <h3 className="experience__subheader">Role</h3>
          <p className="experience__text">Business Development Manager</p>
          <p className="experience__text">Stora Enso</p>
          <p className="experience__text">2020 - 2021</p>
          <img src="" alt="" />
        </div>
        <div className="experience__section">
          <h3 className="experience__subheader">What I Valued</h3>
          <p className="experience__text">
            The time I spent building industry networks, solving client
            problems, and creating customer value propositions based on
            corporate strategies
          </p>
        </div>
        <div className="experience__section">
          <h3 className="experience__subheader">Tools</h3>
          <ul className="experience__list">
            <li className="experience__item">Microsoft Teams</li>
            <li className="experience__item">Microsoft Dynamics 365</li>
            <li className="experience__item">Miro</li>
            <li className="experience__item">Canva</li>
          </ul>
        </div>
      </article>{" "}
      <article className="experience">
        <div className="experience__section">
          <h3 className="experience__subheader">Role</h3>
          <p className="experience__text">R&D Engineer</p>
          <p className="experience__text">Stora Enso</p>
          <p className="experience__text">2019 - 2020</p>
          <img src="" alt="" />
        </div>
        <div className="experience__section">
          <h3 className="experience__subheader">What I Valued</h3>
          <p className="experience__text">
            Proving hypotheses through calculation, simulation, and testing, and
            working with customers to solve the technical issues they faced
          </p>
        </div>
        <div className="experience__section">
          <h3 className="experience__subheader">Tools</h3>
          <ul className="experience__list">
            <li className="experience__item">Tekla TEDDS</li>
            <li className="experience__item">CadWorks</li>
            <li className="experience__item">Revit</li>
            <li className="experience__item">IFC</li>
          </ul>
        </div>
      </article>
    </>
  );
}
