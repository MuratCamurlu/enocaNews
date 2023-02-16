import React from "react";
import style from "./Product.module.css";
const Product = ({ img, link }) => {
  return (
    <div className={style.p}>
      <div className={style.browser}>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
      </div>
      <a href={link} target="_blank" rel="noreferer">
        <img src={img} className={style.img} />
      </a>
    </div>
  );
};

export default Product;
