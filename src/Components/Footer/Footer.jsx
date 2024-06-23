import React from 'react'
import { Row,Container,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthernet } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss'
function Footer() {
  return (
    <>
    <div className="footer_section">
    <Container className="p-10 flex">
        <Col md={3}>
        <div className="logo_col">
          <div className="logo_title">
          <FontAwesomeIcon icon={faEthernet}></FontAwesomeIcon>
          <h2> The Trending News</h2>
          </div>
            
            <p className="logo_desc">
              This is a trending page where all the trending news are available. It is an online platform for the online news.
            </p>
            </div> 
            </Col>
            <Col md={2}>
          <div className="footer_widget">
            <h4 className='fa-title'>Company</h4>
            <div className="line"></div>
          
            <ul className='list-wrap'>
              <li><a href="">About Us</a></li>
              <li><a href="">Masthead</a></li>
              <li><a href="">Editorial Standards</a> </li>
              <li><a href="">Workplace  Policy</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>
            </Col>
            <Col md={2}>
            <div className="footer_widget">
            <h4 className='fa-title'>Company</h4>
            <div className="line"></div>
            <ul className='list-wrap'>
              <li><a href="">About Us</a></li>
              <li><a href="">Masthead</a></li>
              <li><a href="">Editorial Standards</a> </li>
              <li><a href="">Workplace  Policy</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div></Col>
            <Col md={2}>
            <div className="footer_widget">
            <h4 className='fa-title'>Company</h4>
            <div className="line"></div>
          
            <ul className='list-wrap'>
              <li><a href="">About Us</a></li>
              <li><a href="">Masthead</a></li>
              <li><a href="">Editorial Standards</a> </li>
              <li><a href="">Workplace  Policy</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>
            </Col>
            <Col md={2}>
            <div className="footer_widget">
            <h4 className='fa-title'>Company</h4>
            <div className="line"></div>
          
            <ul className='list-wrap'>
              <li><a href="">About Us</a></li>
              <li><a href="">Masthead</a></li>
              <li><a href="">Editorial Standards</a> </li>
              <li><a href="">Workplace  Policy</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>
          </Col>
      </Container>
    </div>
     
    </>
  )
}

export default Footer
