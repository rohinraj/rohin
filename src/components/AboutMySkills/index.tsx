import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { MY_SKILLS } from "../../configs/data";
import classNames from "./AboutMySkills.module.scss";

function AboutMySkills(): JSX.Element {
  return (
    <div className={classNames.aboutMySkills}>
      <hr className={classNames.topLine} />
      <div className={classNames.title}>MY SKILLS</div>
      <div className={classNames.skills}>
        {MY_SKILLS.map((skill, i) => (
          <div className={classNames.skillCard} key={i}>
            <div className={classNames.svgWrap}>
              <PieChart
                animate
                startAngle={-90}
                data={[
                  { title: "Known", value: skill.percent, color: "#0b62ff" },
                  {
                    title: "UnKnown",
                    value: 100 - skill.percent,
                    color: "#4444",
                  },
                ]}
                lineWidth={15}
              />
              <div className={classNames.percent}>
                <span>
                  {skill.percent}
                  <small>%</small>
                </span>
              </div>
            </div>
            <span className={classNames.label}>{skill.language}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMySkills;
