import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './Sports_Option.scss';
import axios from 'axios';
import { Container,Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

function Sports_Option() {
  const [GameData, setGameData] = useState([]);

  const fetchData = async (category, setData) => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          category: category,
          apiKey: "066e5b38f5104c2695c06adf8af4ca2c"
        }
      });
      setData(response.data.articles.slice(0, 2));
      console.log(response.data.articles); // Check console for fetched data
    } catch (error) {
      console.error(`Error fetching news articles: ${error}`);
    }
  }

  useEffect(() => {
    fetchData("sports", setGameData); // Fetch sports category data
  }, []);

  return (
    <>
    <Container>
      <Row>
      {GameData.length === 0 ? (
      <div className="sports-option-section">
      <div className="sports-option-container">
        <div className="sports-option-thumb">
          <Skeleton count={1} height={'80%'}/>
        </div>
        <div className="sports-option-content mt-2">
        <Skeleton count={1} width={'60%'}/>
          <h2 className="sports-option-post-title">
          <Skeleton count={1} height={'40%'}/>
          </h2>
          <div className="publishment">
          <Skeleton count={1} height={'20%'}/>
          </div>
        </div>
      </div>
    </div>
      ) : (
        GameData.map((item, index) => (
          <div className="sports-option-section" key={index}>
            <div className="sports-option-container">
              <div className="sports-option-thumb">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.urlToImage  || "https://placehold.co/800x400"}
                    className="sports-option-thumb-img"
                    alt="News Thumbnail"
                  />
                </a>
              </div>
              <div className="sports-option-content mt-2">
                <Link to={`/category/${item.category}`} className="sports-option-content-title">
                  {item.category}
                </Link>
                <h2 className="sports-option-post-title">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title? item.title.substring(0,50):"No any title available"}
                  </a>
                </h2>
                <div className="publishment">
                  <ul className="publisher">
                    <li>
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      {new Date(item.publishedAt).toLocaleDateString()}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      </Row>
   
    </Container>
    </>
  );
}

export default Sports_Option;
