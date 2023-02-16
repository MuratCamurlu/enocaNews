import React, { useContext } from "react";
import style from "./Toggle.module.css";
import moon from "../../assets/img2/moon.png";
import sun from "../../assets/img2/sun.png";
import { ThemeContext } from "../../context/context";
const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className={style.toggle}>
      <img src={sun} className={style.icon} />
      <img src={moon} className={style.icon} />
      <div
        className={style.button}
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
