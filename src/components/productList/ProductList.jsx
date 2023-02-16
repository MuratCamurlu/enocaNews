import React from "react";
import Product from "../product/Product";
import style from "./ProductList.module.css";
import { data, data2, data3 } from "../../data/data";
const ProductList = () => {
  console.log(data);
  return (
    <div className={style.pl}>
      <div className={style.plText}>
        <h1 className={style.plTitle}>Case Studies</h1>
        <p className={style.plDesc}>
          Technologies Used in Projects: JavaScript, React, Bootstrap, SCSS,
          Rest API, Contax API, Firebase
        </p>
      </div>
      <div className={style.plList}>
        {data.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
      <h1>Certificates</h1>
      <div className={style.plList}>
        {data2.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
      <div className={style.plList}>
        {data3.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
