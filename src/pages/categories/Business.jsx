import React, { useEffect, useState } from "react";
import NewsCard from "../../components/newsCard/NewsCard";
import Spinner from "../../components/spinner/Spinner";
import style from "./Categories.module.css";
const Business = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState();
  const API_KEY = "242fb770517b456dac640c348e0fed1c";
  const url = `https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=${API_KEY}`;

  const filterUrl = `https://newsapi.org/v2/top-headlines?country=${filter}&category=business&apiKey=${API_KEY}`;

  const getNews = (API) => {
    setLoading();
    fetch(API)
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getNews(url);
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getNews(filterUrl);
    setFilter("");
  };

  // console.log(news);
  return (
    <div className={style.container}>
      <div className={style.left}>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ex:us,tr,jp,mx.."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button type="submit">Filter Country</button>
        </form>
      </div>
      <div className={style.right}>
        {loading && <Spinner />}
        {news.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Business;
