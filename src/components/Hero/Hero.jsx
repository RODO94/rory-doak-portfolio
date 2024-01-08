import "./Hero.scss";
import { useState } from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrap">
        <span className="hero__title hero__title--first">
          Hey!<span className="hero__title hero__title--second"> I'm</span>
          <span className="hero__title hero__title--emphasis hero__title--second">
            {" "}
            Rory Doak
          </span>
        </span>
        <span className="hero__title hero__title--third"> Welcome to my </span>
        <span className="hero__title hero__title--emphasis hero__title--second">
          Software Engineer
        </span>{" "}
        <span className="hero__title hero__title--third"> portfolio </span>
        <div className="hero__border"></div>
      </div>
    </section>
  );
}
