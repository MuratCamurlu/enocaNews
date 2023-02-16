import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import style from "./Header.module.css";
const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    navigate("/search", { state: search });
  };

  return (
    <div className={style.container}>
      <div className={style.top}>
        <h1>Murat Çamurlu</h1>
        <form onSubmit={handleSubmit}>
          <input
            className={style.search}
            type="search"
            placeholder="Search for a news "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className={style.button} type="submit">
            SEARCH
          </button>
        </form>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
