import React from "react";
import { MY_EXPERIENCE } from "../../configs/data";
import classNames from "./AboutExperienceAndEducation.module.scss";

function AboutExperienceAndEducation(): JSX.Element {
  return (
    <div className={classNames.aboutExperienceAndEducation}>
      <div className={classNames.title}>EDUCATION &amp; EXOERIENCE</div>
      <div className={classNames.experience}>
        {MY_EXPERIENCE.map((experience, i) => (
          <div className={classNames.experienceCard} key={i}>
            <div className={classNames.icon}>
              <img src={experience.icon} alt="" />
            </div>
            <div className={classNames.time}>{experience.time}</div>
            <div className={classNames.position}>{experience.title}</div>
            <div className={classNames.company}>{experience.subTitle}</div>
            <div className={classNames.desc}>{experience.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutExperienceAndEducation;
