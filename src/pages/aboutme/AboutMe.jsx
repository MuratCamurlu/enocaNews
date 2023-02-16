import React, { useContext } from "react";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Intro from "../../components/intro/Intro";

import ProductList from "../../components/productList/ProductList";
import Toggle from "../../components/toggle/Toggle";
import { ThemeContext } from "../../context/context";
import style from "./AboutMe.module.css";

const AboutMe = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className={style.about}
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default AboutMe;
