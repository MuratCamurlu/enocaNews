import React, { useState } from "react";
import style from "./Slider.module.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const Slider = ({ sliderNews }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderNews.length;
  // console.log(sliderNews);
  // console.log(length);
  // console.log(current);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderNews) || length <= 0) {
    return null;
  }
  return (
    <section className={style.slider}>
      <FaArrowAltCircleLeft className={style.left} onClick={prevSlide} />
      <FaArrowAltCircleRight className={style.right} onClick={nextSlide} />
      {sliderNews.map((item, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className={style.container}>
                <img src={item.urlToImage} className={style.image} />
                <h3>{item.title}</h3>
                <div className={style.link}>
                  <a href={item.url} target="_blank">
                    Detay
                  </a>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
