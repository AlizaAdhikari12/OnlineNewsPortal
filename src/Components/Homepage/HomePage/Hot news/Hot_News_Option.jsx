import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Hot_News_Option.scss';
import Skeleton from 'react-loading-skeleton';

function Hot_News_Option() {
  const [generalData, setGeneralData] = useState([]);

  const fetchData = async (category, setData) => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          category: category,
          apiKey: "300ad6828e164a278c705ebec7cbbfc3"
        }
      });
      setData(response.data.articles.slice(0, 3)); // Fetch at least 3 articles
    } catch (error) {
      console.log("error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData("general", setGeneralData);
  }, []);

  const renderArticles = (articles, startIndex) => (
    articles.length > startIndex ? (
      <div className="Hot-news-section pb-4">
        <div className="Hot-news-section-container">
          <div className="Hot-news-section-thumb">
            <a href={articles[startIndex].url} target="_blank" rel="noopener noreferrer">
              <img src={articles[startIndex].urlToImage || "https://placehold.co/800x300/png"} alt={`thumbnail`} />
            </a>
          </div>
          <div className="Hot-news-section-content">
            <Link to={`/${articles[startIndex].category}`} target="_blank" rel="noopener noreferrer" className="Hot-new-section-content-title">
              General
            </Link>
            <h2 className="Hot-post-title">
              <a href={articles[startIndex].url} target="_blank" rel="noopener noreferrer">
                {articles[startIndex].title ? articles[startIndex].title.substring(0,50):"No any Title available" }
              </a>
            </h2>
            <div className="pusblishment">
              <ul className="publisher">
                <li>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  {new Date(articles[startIndex].publishedAt).toLocaleDateString()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ) : (<div className="Hot-news-section pb-4">
      <div className="Hot-news-section-container">
        <div className="Hot-news-section-thumb">
          <Skeleton height={'80%'}/>
        </div>
        <div className="Hot-news-section-content">
        <Skeleton width={'20%'}/>
          <h2 className="Hot-post-title">
          <Skeleton width={'20%'}/>
          </h2>
          <div className="pusblishment">
          <Skeleton width={'40%'}/>
          </div>
        </div>
      </div>
    </div>) 
  );

  return (
    <div>
      <Container>
        <Row>
          <Col md={4} className="border-r-2 border-gray-100">
            {renderArticles(generalData, 0)}
          </Col>
          <Col md={4} className="border-r-2 border-gray-100">
            {renderArticles(generalData, 1)}
          </Col>
          <Col md={4}>
            {renderArticles(generalData, 2)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hot_News_Option;
