import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Spinner } from "react-bootstrap";

const Game = () => {
  const [GameData, setGameData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (category, setData) => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          category: category,
          apiKey: "066e5b38f5104c2695c06adf8af4ca2c",
        },
      });
      setData(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("Sports", setGameData); 
  }, []);

  return (
    <>
      <Container>
        <Row className="mt-5 justify-content-center">
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            GameData.map((item, index) => (
              <Card style={{ width: '18rem' }} key={index}>
                <Card.Img variant="top" src={item.urlToImage || "https://placehold.co/800x300/png"} alt={item.title} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Button variant="primary" href={item.url} >Read more</Button>
                </Card.Body>
              </Card>
            ))
          )}
        </Row>
      </Container>
    </>
  );
};

export default Game;
