import React from "react";
import classNames from "./HeroSection.module.scss";
import useWindowDimensions from "../../utils/WindowSize";

function HeroSection() {
  const { width, height } = useWindowDimensions();
  let base = Math.min(width, height);
  return (
    <section className={classNames.HeroSection} id="home">
      <div
        className={classNames.bgCircle}
        style={{ height: base * 1.4, width: base * 1.4 }}
      ></div>
      <div className={classNames.texts}>
        <div className={classNames.title}>
          <span>I am</span> <br />
          Rohin Raj
        </div>
        <div className={classNames.desc}>
          Tech Enthusiast. Mechanical Design, Engineering Sciences and Software
          development are my fields of interest. Currently pursuing B.Tech
          Mechanical Engineering and BSc Programming and Data Science.
        </div>
        <a href="mailto:rohinsandro@gmail.com" className={classNames.btnHireMe}>
          Hire Me
        </a>
      </div>
      <div className={classNames.bg} />
    </section>
  );
}

export default HeroSection;
