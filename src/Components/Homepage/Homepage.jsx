import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Heading from "./heading/Heading";
import NewHeadline from "./newheadline/NewHeadline";
import Headline from "./headline/Headline";
import AdHomepage from "../Advertisement/AdHomepage";
import Politicspost from "./Politics-post/PoliticsPost";
import Hot_News_Headline from "./Hot news/Hot_News_Headline";
const Homepage = () => {
  return (
    <div>
      <Container>

        <Row className="mt-5">
          <Col md={9}>
             <NewHeadline /> 
             <AdHomepage/>
             <Politicspost/>
          <Hot_News_Headline/>
          </Col>
          <Col md={3}>
     <Headline/>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
