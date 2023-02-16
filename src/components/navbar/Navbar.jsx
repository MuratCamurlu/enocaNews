import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <ul className={style.topUl}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Me</NavLink>
      </li>
      <li>
        <NavLink to="/business"> Categories</NavLink>

        <ul className={style.bottomUl}>
          <li>
            <NavLink to="/business">Business</NavLink>
          </li>
          <li>
            <NavLink to="/general">General</NavLink>
          </li>
          <li>
            <NavLink to="/health">Health</NavLink>
          </li>
          <li>
            <NavLink to="/entertainment">Entertainment</NavLink>
          </li>
          <li>
            <NavLink to="/science">Science</NavLink>
          </li>
          <li>
            <NavLink to="/sports">Sports</NavLink>
          </li>
          <li>
            <NavLink to="/technology">Technology</NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
