import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {Spinner} from 'react-bootstrap'
import { Link } from "react-router-dom";

import "./Headline.scss";
import Skeleton from "react-loading-skeleton";

const Headline = () => {
  const [politicsData, setPoliticsData] = useState([]);
  const [entertainmentData, setEntertainmentData] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  
  

  const fetchData = async (category, setData) => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country:"us",
          category: category,
          apiKey: "300ad6828e164a278c705ebec7cbbfc3"
        }
      });
      console.log(response)
      setData(response.data.articles.slice(0,4));

    } catch (error) {
      console.error(`Error fetching ${category} news articles`, error);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      await fetchData("entertainment", setEntertainmentData);
    };
    fetchAllData();
  }, []);

  const renderArticles = (articles, category) => (
    articles.length > 0 ? articles.map((item, index) => (
      <div className="stories-post-wrap" key={index}>
        <div className="stories-post">
          <div className="stories-post-thumb">
            <img src={item.urlToImage ||  "https://placehold.co/800x300/png"} alt={`${category} thumbnail`} />
          </div>
          <div className="stories-post-content">
            <Link to= "/Business"  className="post-tag">{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
            <h5 className="post-title pt-3">
              <a href={item.url} className="post-details" target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </h5>
            <div className="pusblishment">
              <ul className="publisher">
                <li>
                  <FontAwesomeIcon icon={faCalendarAlt} /> {new Date(item.publishedAt).toLocaleDateString()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )) :   
    <div className="stories-post-wrap">
    <div className="stories-post">
      <div className="stories-post-thumb">
       <Skeleton height={18}/>
      </div>
      <div className="stories-post-content">
      <Skeleton count={4} width={180} height={180}/>
      </div>
    </div>
  </div>
  );

  return (
    <div className="headline-container">
      <div className="headline-container-title mb-2">
        <div className="headline-container-line"></div>
        <h2 className="title pt-4 pb-2">Top Stories</h2>
      </div>
   
        <>
          {renderArticles(entertainmentData,"entertainment")}
         
        </>
     
    </div>
  );
};

export default Headline;
