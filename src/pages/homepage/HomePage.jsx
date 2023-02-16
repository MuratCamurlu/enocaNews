import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import style from "./HomePage.module.css";
import NewsCard from "../../components/newsCard/NewsCard";
import Slider from "../../components/slider/Slider";
import Spinner from "../../components/spinner/Spinner";
import axios from "axios";
const HomePage = () => {
  const [news, setNews] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);

  const API_KEY = "2835d72f10a5493884ee1fe5216c379b";

  const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
  const getNews = async () => {
    try {
      const { data } = await axios(url);
      setNews(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, [url]);
  // console.log(news);
  const sliderNews = news?.splice(0, 3);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const displayNews = news?.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(news?.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className={style.container}>
      <div className={style.slider}>
        <Slider sliderNews={sliderNews} />
      </div>
      <div className={style.news}>
        {displayNews?.map((item, index) => (
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
