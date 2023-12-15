import { useEffect } from "react";
import "./Hero.scss";
import { useState } from "react";
import CircleTop from "../CircleTop/CircleTop";
import CircleBottom from "../CircleBottom/CircleBottom";

export default function Hero() {
  const [screenWidth, setScreenWidth] = useState(screen.width);
  const [circleArray, setCircleArray] = useState([]);

  const circleBottom = <span className="hero__wave"></span>;
  const circleTop = <span className="hero__wave hero__wave-top"></span>;
  const circleFn = (screenWidth) => {
    let numberOfCircles = Math.floor((screenWidth - 12 * 16) / (3.5 * 16) - 1);
    let circleNumber = [];
    for (let i = 0; i < numberOfCircles + 1; i++) {
      console.log(i);
      if (i === 0 || i % 2 === 0) {
        console.log("circleTop");
        circleNumber.push(0);
      } else {
        console.log("circlebottom");
        circleNumber.push(1);
      }
    }
    return setCircleArray(circleNumber);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(screen.width);
    });
  });

  useEffect(() => {
    circleFn(screenWidth);
    console.log(screen.width);
  }, [screenWidth]);

  console.log(screenWidth);
  console.log(circleArray);
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
        <div className="hero__border">
          {circleArray.map((circle, index) => {
            if (circle === 0) {
              return <CircleTop key={index} />;
            } else {
              return <CircleBottom key={index} />;
            }
          })}
        </div>
      </div>
    </section>
  );
}
