import { Container, Row, Col,Spinner } from "react-bootstrap";
import "./newheadline.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const NewHeadline = () => {
  const [businessData, setBusinessData] = useState([]);
  const [politicsData, setPoliticsData] = useState([]);
  const [entertainmentData,setEntertainmentData]= useState([]);
const [sportsData,setSportsData]=useState([]);
const [healthData,setHealthData]=useState([]);
const [genealData,setGeneralData]=useState([]);
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
    } catch (error) {
      console.error(`Error fetching ${category} news articles`, error);
    }
  };

  useEffect(() => {
    fetchData("business", setBusinessData);    
    fetchData("health",setHealthData)

  }, []);

  const renderArticles = (articles, category) => (
    articles.length > 0 ? articles.map((item, index) => (
      <div className="news-section pb-4" key={index}>
        <div className="news-section-container">
          <div className="news-section-thumb">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.urlToImage || "https://placehold.co/800x300/png"} alt={`${category} thumbnail`} />
            </a>
          </div>
          <div className="news-section-content">
            <Link to ="/Business" target="_blank" rel="noopener noreferrer" className="new-section-content-title">
              {category.charAt().toUpperCase() + category.slice(1)}
            </Link>
            <h2 className="post-title ">
              <a href={item.url} target="_blank" rel="noopener noreferrer" >
                {item.title}
              </a>
            </h2>
            <div className="pusblishment">
              <ul className="publisher">
                <li>
                  <FontAwesomeIcon icon={faUser} />
                  BY
                  <a className="writer" href="#">
                    {item.author || "Unknown"}
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  {new Date(item.publishedAt).toLocaleDateString()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )) : 
    <div className="news-section pb-4">
    <div className="news-section-container">
      <div className="news-section-thumb">
       <Skeleton height={"80%"}/>
      </div>
      <div className="news-section-content">
        <Link to ="/Business" target="_blank" rel="noopener noreferrer" className="new-section-content-title">
          <Skeleton width={120}/>
        </Link>
        <h2 className="post-title ">
          <Skeleton width={120}/>
        </h2>
      </div>
    </div>
  </div>
  );

  return (
    <Container>
      <Row>
        <Col md={4}>
          {renderArticles(businessData, "business")}
        
          
        </Col>
        <Col md={8}>
          <div className="headline-news-section">
            {healthData.length > 0 ? (
              <div className="headline-news-container">
                <div className="headline-news-thumb">
                  <a href={healthData[0].url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={healthData[0].urlToImage ||  "https://placehold.co/800x600/png"}
                      className="headline-news-thumb-img"
                      alt="Health thumbnail"
                    />
                  </a>
                </div>
                <div className="headline-news-content">
                  <Link to ="/Business"  className="headline-news-content-title">
                    Health
                  </Link>
                  <h2 className="headline-news-post-title">
                    <a href={healthData[0].url} target="_blank" rel="noopener noreferrer">
                      {healthData[0].title}
                    </a>
                  </h2>
                  <div className="publishment">
                    <ul className="publisher">
                      <li>
                        <FontAwesomeIcon icon={faUser} />
                        BY
                        <a className="writer" href="#">
                          {healthData[0].author || "Unknown"}
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        {new Date(healthData[0].publishedAt).toLocaleDateString()}
                      </li>
                    </ul>
                  </div>
                  <div className="headline-news-post-desc">
                    <a href={healthData[0].url} target="_blank" rel="noopener noreferrer">
                      {healthData[0].description}
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="headline-news-container">
              <div className="headline-news-thumb">
               <Skeleton height={500}/>
              </div>
              <div className="headline-news-content">
               <Skeleton count={1} width={80}/>
                <h2 className="headline-news-post-title">
                <Skeleton count={1} width={80}/>
                </h2>
                <div className="headline-news-post-desc">
                <Skeleton count={1} width={80}/>
                </div>
              </div>
            </div>
            )}
          </div>
        </Col>
    
      </Row>
    </Container>
  );
};

export default NewHeadline;
