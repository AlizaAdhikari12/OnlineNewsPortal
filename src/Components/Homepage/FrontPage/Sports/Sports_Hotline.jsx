import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './Sports_Hotline.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

function Sports_Hotline() {
  const [GameData, setGameData] = useState([]);

  const fetchData = async (category, setData) => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          category: category,
          country: 'us',
          apiKey: '300ad6828e164a278c705ebec7cbbfc3'
        }
      });
      setData(response.data.articles.slice(0, 1));
    } catch (error) {
      console.log('error while fetching', error);
    }
  };

  useEffect(() => {
    fetchData('sports', setGameData);
  }, []);

  return (
    <>
      {GameData.length === 0 ? (
         <div className="sports-news-section">
         <div className="sports-news-container">
           <div className="sports-news-thumb">
            <Skeleton count={1} height={"80%"}/>
           </div>
           <div className="sports-news-content mt-2">
             <Link to="/Business" className="sports-news-content-title">
             <Skeleton count={1} width={"20%"}/>
             </Link>
             <h2 className="sports-news-post-title">
             <Skeleton count={1} width={"60%"}/>
             </h2>
             <div className="publishment">
             <Skeleton count={1} width={"40%"}/>
             </div>
           </div>
         </div>
       </div>
      ) : (
        GameData.map((item, index) => (
          <div className="sports-news-section" key={index}>
            <div className="sports-news-container">
              <div className="sports-news-thumb">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.urlToImage || "https://placehold.co/800x400"}
                    className="sports-news-thumb-img"
                    alt="Sports thumbnail"
                  />
                </a>
              </div>
              <div className="sports-news-content mt-2">
                <Link to="/Business" className="sports-news-content-title">
                  {item.category}
                </Link>
                <h2 className="sports-news-post-title">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title? item.title.substring(0,50):"No any Title available"}
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
    </>
  );
}

export default Sports_Hotline;
