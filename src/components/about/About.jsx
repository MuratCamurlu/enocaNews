import React from "react";
import style from "./About.module.css";
import award from "../../assets/img2/award.png";
const About = () => {
  return (
    <div className={style.about}>
      <div className={style.left}>
        <div className={style.cardBg}></div>
        <div className={style.card}>
          <img
            src="https://m.media-amazon.com/images/I/41h04z4ERrL._AC_SY580_.jpg"
            className={style.img}
          />
        </div>
      </div>
      <div className={style.right}>
        <h1 className={style.title}>About Me</h1>
        <p className={style.sub}></p>
        <p className={style.desc}>
          I have been in the software world for about 3 years. 1.5 years passed
          as the learning and training phase. Especially for the last 1 year, I
          have been professionally involved in the software world as a Frontend
          Developer.Currently, I am working in a company remotely. We are
          developing a platform for professional employment in this company. We
          use React, SCSS and Chakra UI in the project. Our project is nearing
          completion and I am open to new job opportunities as it is a
          project-based job.
        </p>
        <div className={style.award}>
          <img src={award} className={style.awardImg} />
          <div className={style.awardText}>
            <h4 className={style.awardTitle}>Course Award</h4>
            <p className={style.awardDesc}>Best Team Lead </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
