import React from "react";
import style from "./NewsCard.module.css";
import random from "../../assets/img/random.png";
const NewsCard = ({ title, url, urlToImage, content }) => {
  return (
    <div className={style.card}>
      <img src={urlToImage ? urlToImage : random} />
      <div className={style.cardDetail}>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className={style.a}>
          <a className={style.link} href={url} target="_blank">
            Detay
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
