// Filtered_Search.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { Card, Button, Container,Row, Col } from 'react-bootstrap';
import '../../Game/Game.scss'

function Filtered_Search() {
  const location = useLocation();
  const filterData = location.state?.filterData || [];

  return (
    <Container>
      <Row className="mt-5">
      {filterData.length === 0 ? (
        <Skeleton />
      ) : (
        filterData.map((item, index) => (
          <Card style={{ width: '20rem' }} key={index} className="flex">
            <div className="card_numb ">
              <Card.Img variant="top" src={item.urlToImage || "https://placehold.co/800x400"} className="Card_image" />
            </div>
            <Card.Body>
              <Card.Title className="card_title">
                <a href={item.url}>{item.title ? item.title.substring(0, 50) : "No title available"}</a>
              </Card.Title>
              <Card.Text className="card_text">
                {item.description ? item.description.substring(0, 100) : "No description available"}
              </Card.Text>
              <Button className="readmore_button" href={item.url}>Read more</Button>
            </Card.Body>
          </Card>
        ))
      )}

      </Row>
    </Container>
 );
}

export default Filtered_Search;
