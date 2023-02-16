import React from "react";
import style from "./Intro.module.css";
import man from "../../assets/img2/man.png";
const Intro = () => {
  return (
    <div className={style.intro}>
      <div className={style.left}>
        <div className={style.leftWrapper}>
          <h2 className={style.nameTop}>Hello,My name is</h2>
          <h1 className={style.name}>Murat Çamurlu</h1>
          <div className={style.title}>
            <div className={style.titleWrapper}>
              <div className={style.titleItem}>Web Develoer</div>
              <div className={style.titleItem}>UI/UX Designer</div>
              <div className={style.titleItem}>React Developer</div>
              <div className={style.titleItem}>Writer</div>
            </div>
          </div>
          <p className={style.desc}>
            I am a frontend developer. My backend course is about to be finished
            now. But I like working on the frontend more. Technologies I use on
            the frontend are; HTML5, CSS3, Javascript, React Js., Next Js.,
            Bootstrap, Material UI, Contax API, Redux, Redux Toolkit. I am
            learning Python and Django in the backend area.
          </p>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.bg}></div>
        <img src={man} className={style.img} />
      </div>
    </div>
  );
};

export default Intro;
