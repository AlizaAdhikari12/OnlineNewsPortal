import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Spinner, Col } from "react-bootstrap";
import './Game.scss'
import Skeleton_Loading from "../Layout/Loading Component/Skeleton_Loading";


const Game = () => {
  const [sportsData,setSportsData] = useState([]);
  const fetchData = async (category,setData)=>{
    try{
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          category: category,
          country: 'us',
          apiKey: '066e5b38f5104c2695c06adf8af4ca2c'
        }
      });
      setData(response.data.articles)
    }catch(error)
    {"error fetching data",error};
  }
  useEffect(()=>{
    fetchData("sports",setSportsData);
  },[])
  return (
    <>
      <Container>
        <Row className="mt-5">
       
         { sportsData.length ===0 ?
         (
          <Skeleton_Loading/>
         ):  (
          sportsData.map((item, index) =>(
            <Card style={{ width: '18rem' }} key={index} className="Card">
                <div className="card_numb">
                <Card.Img variant="top" src={ item.urlToImage|| "https://placehold.co/800x400" }className="Card_image"/>
                </div>
                <Card.Body>
                  <Card.Title className="card_title"><a href={item.url}>{item.title? item.title.substring(0,50):"No any title are available"}</a></Card.Title>
                  <Card.Text className="card_text">
                 {item.description? item.description.substring(0,100):"No any description are availbale"}
                  </Card.Text>
                  <Button className="readmore_buttom" href={item.url} >Read more</Button>
                </Card.Body>
              </Card>
         )))}
            
           
       
          </Row>
      </Container>
    </>
  );
};

export default Game;
