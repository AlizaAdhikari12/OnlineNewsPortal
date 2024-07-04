import React from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt,faUser } from "@fortawesome/free-solid-svg-icons";
import "./Politics_First_Post.scss";
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import axios from"axios";
import Skeleton from 'react-loading-skeleton';

function Politics_First_Post() {
  const [politicsData,setPoliticsData] = useState([])
  const fetchData = async (category, setData) => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          category: category,
          apiKey: "300ad6828e164a278c705ebec7cbbfc3"
        }
      });
      setData(response.data.articles); 
      console.log(response)
    } catch (error) {
      console.error(`Error fetching news articles`);
    }
  };
  useEffect(()=>{
    fetchData("politics",setPoliticsData)
  },[])
  return (
    <>
    <Container>
    {politicsData.length>0 ?( 
        <Row className="politics_row">
      <Col md={6}>  
 <div className="politics_section_thumb"> 
 <div className="politics-section-thumb-container">
 <a href={politicsData[0].url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={politicsData[0].urlToImage || "images/sunil.png"}
                      className="politics_section_thumb-img"
                      alt="Health thumbnail"
                    />
                  </a>
 </div>
 </div>
       
      </Col>
      <Col md={6}>
      <div className="politics_section_cat mb-3">
        <Link to="/"  className="politics_section_cat_title">Politics</Link>
    </div>
    <div className="politics_section_title">
        <Link to="/">{politicsData[0].title}</Link>
    </div>
    <div className="pusblishment mt-3 mb-3">
              <ul className="publisher">
                <li>
                  <FontAwesomeIcon icon={faUser} />
                  BY
                  <a className="writer" href="#">
                   {politicsData[0].author}
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  {new Date(politicsData[0].publishedAt).toLocaleDateString()}
                </li>
              </ul>
            </div>
            <Button className="readmore_button">Read More</Button>
           
      </Col>
      </Row>
  ):(
    <Row className="politics_row">
      <Col md={6}>  
 <div className="politics_section_thumb"> 
 <div className="politics-section-thumb-container">
<Skeleton count={1} height={'80%'}/>
 </div>
 </div>
      </Col>
      <Col md={6}>
      <div className="politics_section_cat mb-3">
      <Skeleton count={1} width={'40%'}/>
    </div>
    <div className="politics_section_title">
    <Skeleton count={1} width={'60%'}/>
    </div>
    <div className="pusblishment mt-3 mb-3">
    <Skeleton count={1} width={'30%'}/>
            </div>
            <Skeleton count={1} width={'40%'}/>
           
      </Col>
      </Row>
  )}
  </Container>
    </>
   
  )
}

export default Politics_First_Post
