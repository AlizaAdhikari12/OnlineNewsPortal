import Button from 'react-bootstrap/Button';
import { Container, Row,Spinner } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
;

const World = () => {
  const [technologyData, settechnologyData] = useState([]);
  const [SpinnerData,setSpinnerData]=useState(true)

  const fetchData = async (category, setData) => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          category: category,
          apiKey: "066e5b38f5104c2695c06adf8af4ca2c" 
        }
      });
      setData(response.data.articles);
      setSpinnerData(false)
    } catch (error) {
      console.log("Error fetching data", error);
      setSpinnerData(false)
    }
  };

 useEffect(() => {
    fetchData("technology", settechnologyData);
  }, []);
  

  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        {
     SpinnerData?(
          <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
        ):
          technologyData.map((article, index) => {
          return (
            <Card style={{ width: '20rem' }} className='p-2' key={index}>
              <Card.Img variant="top" src={article.urlToImage ||  "https://placehold.co/800x300/png"} alt={article.title} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  {article.description}
                </Card.Text>
                <Button variant="primary" href={article.url} target="_blank">Read more</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default World;
