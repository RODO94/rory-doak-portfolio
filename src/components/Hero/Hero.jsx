import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrap">
        <h1 className="hero__title">
          Hello!
          <br /> I'm{" "}
          <span className="hero__title hero__title--emphasis">Rory Doak</span>,
          welcome to my{" "}
          <span className="hero__title hero__title--emphasis">
            Software Engineer
          </span>{" "}
          portfolio
        </h1>
      </div>
    </section>
  );
}
