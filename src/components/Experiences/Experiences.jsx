import ExperienceList from "../ExperienceList/ExperienceList";
import "./Experiences.scss";

export default function Experiences() {
  return (
    <section className="experiences" id="experiences">
      <div className="experiences__wrap">
        <h2 className="experiences__title">What I have done before</h2>
        <ExperienceList />
      </div>
    </section>
  );
}
