import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Top_News_Title from "./Top_News/Top_News_Title";
import Top_News_Hotline from "./Top_News/Top_News_Hotline";
import AdHomepage from "../../Advertisement/AdHomepage";
import Sports_Headlins from "./Sports/Sports_Headlins";
import SideBarWrap from "./sidebar_wrap/SideBarWrap";
import AD3 from "../../Advertisement/AD3";
import Sidebar_Business_Sectio from "../FrontPage/Business_Column/Sidebar_Business_Sectio";



const FrontPage = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={9}  className="border-r-4 border-gray-100">
            <Top_News_Title/>
           <Top_News_Hotline/>      
           <AdHomepage/>
            <Sports_Headlins/>
          </Col>
          <Col md={3}>
              <SideBarWrap/>
              <Sidebar_Business_Sectio/>
            <AD3/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FrontPage;
