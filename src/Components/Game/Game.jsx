import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Spinner, Col } from "react-bootstrap";
import './Game.scss'
import Skeleton_Loading from "../Layout/Loading Component/Skeleton_Loading";
import Pagination from "../Pagination";

const Game = () => {
  const [sportsData,setSportsData] = useState([]);
  const[currentPage,setcurrentPage]=useState(1)
  const[postsPerPage]=useState(4);
  const fetchData = async (category,setData)=>{
    try{
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          category: category,
          country: 'us',
          apiKey: '300ad6828e164a278c705ebec7cbbfc3'
        }
      });
      setData(response.data.articles)
    }catch(error)
    {"error fetching data",error};
  }
  useEffect(()=>{
    fetchData("sports",setSportsData);
  },[])

  // get current posts
  const indexofLastPost = currentPage*postsPerPage;
  const indexofFirstPage = indexofLastPost - postsPerPage;
  const curentPosts = sportsData.slice(indexofFirstPage,indexofLastPost)
  const paginate = pageNumber=>setcurrentPage(pageNumber);
  return (
    <>
      <Container>
        <Row className="mt-5">
       
         { curentPosts.length ===0 ?
         (
          <Skeleton_Loading/>
         ):  (
          curentPosts.map((item, index) =>(
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
            <Pagination postsPerPage={postsPerPage} totalPosts ={sportsData.length} paginate={paginate}/> 
          </Row>
      </Container>
    </>
  );
};

export default Game;
