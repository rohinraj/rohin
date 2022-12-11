import React from "react";
import Image from "next/image";
import classNames from "./AboutSection.module.scss";
import AboutMySkills from "../AboutMySkills";
import AboutExperienceAndEducation from "../AboutExperienceAndEducation";

function AboutSection(): JSX.Element {
  return (
    <section className={classNames.AboutSection}>
      <div className={classNames.title}>
        <span className={classNames.main}>RESUME</span>
        <div className={classNames.inTitle}>
          ABOUT&nbsp;&nbsp;<span>ME</span>
        </div>
      </div>
      <div className={classNames.infos}>
        <div className={classNames.personalInfo}>
          <div className={classNames.personalTitle}>PERSONAL INFOS</div>
          <div className={classNames.details}>
            <div className={classNames.item}>
              Name:&nbsp;&nbsp;
              <wbr />
              <span>Rohin Raj S B</span>
            </div>
            <div className={classNames.item}>
              Age:&nbsp;&nbsp;
              <wbr />
              <span>{getAge()} Years</span>
            </div>
            <div className={classNames.item}>
              Phone:&nbsp;&nbsp;
              <wbr />
              <a href="tel:+919544961931">
                <span>+91 9544961931</span>
              </a>
            </div>
            <div className={classNames.item}>
              Email:&nbsp;&nbsp;
              <wbr />
              <a href="mailto:rohinsandro@gmail.com">
                <span>rohinsandro@gmail.com</span>
              </a>
            </div>
            <div className={classNames.item}>
              Languages:&nbsp;&nbsp;
              <wbr />
              <span>English,Malayalam</span>
            </div>
            <div className={classNames.item}>
              Github:&nbsp;&nbsp;
              <wbr />
              <a
                href="https://github.com/rohinraj"
                target="_blank"
                rel="noreferrer"
              >
                <span>@rohinraj</span>
              </a>
            </div>
            <div className={classNames.item}>
              LinkedIn:&nbsp;&nbsp;
              <wbr />
              <a
                href="https://www.linkedin.com/in/rohinraj"
                target="_blank"
                rel="noreferrer"
              >
                <span>@rohinraj</span>
              </a>
            </div>
            <div className={classNames.item}>
              HackerRank:&nbsp;&nbsp;
              <wbr />
              <a
                href="https://www.hackerrank.com/rohinraj"
                target="_blank"
                rel="noreferrer"
              >
                <span>@rohinraj</span>
              </a>
            </div>
            <div className={classNames.item}>
              Twitter:&nbsp;&nbsp;
              <wbr />
              <a
                href="https://twitter.com/rohinrajsb"
                target="_blank"
                rel="noreferrer"
              > 
                <span>@rohinrajsb</span>
              </a>
            </div>
          </div>
          <a
            className={classNames.button}
            href="/assets/downloads/resume.pdf"
            download
          >
            <span className={classNames.btnText}>Download Resume</span>
            <div className={classNames.btnIcon}>
              <Image
                src="/assets/icons/download.png"
                alt=""
                width={256}
                height={256}
                layout="responsive"
              />
            </div>
          </a>
        </div>
        <div className={classNames.countCards}>
          <div className={classNames.card}>
            <div className={classNames.count}>6</div>
            <div className={classNames.label}>MONTHS OF EXPERIENCE</div>
          </div>
          <div className={classNames.card}>
            <div className={classNames.count}>24</div>
            <div className={classNames.label}>PROJECTS</div>
          </div>
          <div className={classNames.card}>
            <div className={classNames.count}>7</div>
            <div className={classNames.label}>VOLUNTEERING POSITIONS</div>
          </div>
          <div className={classNames.card}>
            <div className={classNames.count}>3</div>
            <div className={classNames.label}>CERTIFICATIONS</div>
          </div>
        </div>
      </div>
      <AboutMySkills />
      <AboutExperienceAndEducation />
    </section>
  );
}

function getAge(): number {
  var today = new Date();
  var birthDate = new Date(1009017000000);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default AboutSection;
