import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import NewHeadline from "./HomePage/newheadline/NewHeadline";
import Headline from "./HomePage/headline/Headline";
import AdHomepage from "../Advertisement/AdHomepage";
import Politicspost from "./HomePage/Politics-post/PoliticsPost";
import Hot_News_Headline from "./HomePage/Hot news/Hot_News_Headline";
import Advertisement2 from "../Advertisement/Advertisement2";
import Stories_Post_Title from "./HomePage/stories_post/Stories_Post_Title";

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
          <AdHomepage/>
          </Col>
          <Col md={3}>
     <Headline/>
     <Advertisement2/>
     <Stories_Post_Title/>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
