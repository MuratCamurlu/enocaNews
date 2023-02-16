import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import style from "./HomePage.module.css";
import NewsCard from "../../components/newsCard/NewsCard";
import Slider from "../../components/slider/Slider";
import Spinner from "../../components/spinner/Spinner";
const HomePage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  // const API_KEY = "676f017549224f488970f1835f9db971";
  const API_KEY = "242fb770517b456dac640c348e0fed1c";
  const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
  const getNews = () => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getNews();
  }, []);

  const sliderNews = news.splice(0, 3);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const displayNews = news.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(news.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className={style.container}>
      <div className={style.slider}>
        <Slider sliderNews={sliderNews} />
      </div>
      <div className={style.news}>
        {loading && <Spinner />}
        {displayNews.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>

      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        nextLinkClassName={"nextBttn"}
        previousLinkClassName={"previousBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default HomePage;