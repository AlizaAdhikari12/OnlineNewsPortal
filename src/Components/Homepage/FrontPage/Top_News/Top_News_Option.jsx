import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Top_New_Option.scss';
import Skeleton from 'react-loading-skeleton';

function Top_News_Option() {
  const [politicsData, setPoliticsData] = useState([]);
  
  const fetchData = async (category, setData) => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          category: category,
          apiKey: "300ad6828e164a278c705ebec7cbbfc3"
        }
      });
      setData(response.data.articles.slice(0, 3));
    } catch (error) {
      console.log("error while fetching data", error);
    }
  };

  useEffect(() => {
    fetchData("politics", setPoliticsData);
  }, []);

  return (
    <Container>
      <Row className='top_news_option_section'>
        {politicsData.length === 0 ? (
          <div className="top_news_option_title"> 
          <div className="top_news_option_thumb">
            <a href="" target="_blank" rel="noopener noreferrer">
              <Skeleton height={80}/>
            </a>
          </div>
          <div className="top_news_option_numb">
            <div className="top_news_section_cat mb-2">
              <Skeleton count={4}/>
            </div>
           
          </div>
        </div>
        ) : (
          politicsData.map((item, index) => (
            <Col md={4} key={index}>
              <div className="top_news_option_title"> 
                <div className="top_news_option_thumb">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.urlToImage || "https://placehold.co/800x400" } className="top_news_thumb_img" alt="News thumbnail" />
                  </a>
                </div>
                <div className="top_news_option_numb">
                  <div className="top_news_section_cat mb-2">
                    <Link to="/" className="top_news_option_section_cat_title">Politics</Link>
                  </div>
                  <div className="top_news_option_section_title">
                    <Link to="/">{item.title ? item.title.substring(0,50):"No any title available"}</Link>
                  </div>
                  <div className="publishment mt-2 mb-2">
                    <ul className="publisher">
                      <li>
                        <FontAwesomeIcon icon={faCalendarAlt} /> {new Date(item.publishedAt).toLocaleDateString()}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default Top_News_Option;
