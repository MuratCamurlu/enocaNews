import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/newsCard/NewsCard";
import style from "./Categories.module.css";
const Search = () => {
  const [news, setNews] = useState();
  const { state } = useLocation();
  // console.log(state);
  const API_KEY = "242fb770517b456dac640c348e0fed1c";
  const url = `https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err));
  }, [url]);
  console.log(news);
  return (
    <div className={style.searchPage}>
      <h1>
        News about :<span className={style.span}>{state}</span>
      </h1>
      <div className={style.searchNews}>
        {news && news.map((item, index) => <NewsCard key={index} {...item} />)}
        {!news && <h1>The searched word did not match</h1>}
      </div>
    </div>
  );
};

export default Search;
