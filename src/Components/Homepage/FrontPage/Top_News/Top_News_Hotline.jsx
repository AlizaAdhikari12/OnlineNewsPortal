import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Button, Container } from 'react-bootstrap';
import './Top_News_Hotline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Top_News_Option from './Top_News_Option';
import Skeleton from 'react-loading-skeleton';

function Top_News_Hotline() {
  const [politicsData, setPoliticsData] = useState([]);

  const fetchData = async (category, setData) => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          category: category,
          apiKey: "066e5b38f5104c2695c06adf8af4ca2c"
        }
      });
      setData(response.data.articles.slice(0, 1));
    } catch (error) {
      console.log("error while fetching data", error);
    }
  };

  useEffect(() => {
    fetchData("politics", setPoliticsData);
  }, []);

  return (
    <Container>
      <Row className="top_news_first_section">
        <div className="top_news_title">
          {politicsData.length === 0 ? (
            <React.Fragment >
            <div className="top_news_title_thumb">
             <Skeleton height={'80%'}/>
            </div>
            <div className="top_news_title_numb">
              <div className="top_news_section_cat mb-3">
               <Skeleton width={800}/>
              </div>
              <div className="top_news_section_title">
              <Skeleton width={'80%'}/>
              </div>
              <div className="publishment mt-3 mb-3">
                <Skeleton width={'50%'}/>
              </div>
              <div className="top_news_section_desc">
              <Skeleton width={'80%'}/>
              </div>
              <Skeleton width={'40%'}/>
            </div>
          </React.Fragment>
          ) : (
            politicsData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="top_news_title_thumb">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.urlToImage || "https://placehold.co/800x400" } className="top_news_thumb_img" alt="News thumbnail" />
                  </a>
                </div>
                <div className="top_news_title_numb">
                  <div className="top_news_section_cat mb-3">
                    <Link to="/" className="top_news_section_cat_title">Politics</Link>
                  </div>
                  <div className="top_news_section_title">
                    <Link to="/">{item.title ? item.title.substring(0,50):"No any title available"}</Link>
                  </div>
                  <div className="publishment mt-3 mb-3">
                    <ul className="publisher">
                      <li>
                        <FontAwesomeIcon icon={faUser} /> BY
                        <a className="writer" href="#"> Admin</a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCalendarAlt} /> {new Date(item.publishedAt).toLocaleDateString()}
                      </li>
                    </ul>
                  </div>
                  <div className="top_news_section_desc">
                    {item.description}
                  </div>
                  <Button variant='dark'>Read More</Button>
                </div>
              </React.Fragment>
            ))
          )}
         
        </div>
      </Row>
      <Top_News_Option />
    </Container>
  );
}

export default Top_News_Hotline;
