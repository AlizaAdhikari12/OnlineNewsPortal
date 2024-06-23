import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Sports_Headline.scss'
import Sports_Hotline from './Sports_Hotline'
import Sports_Option from './Sports_Option'

function Sports_Headlins() {
    return (
        <>
        <Row className="sports-section mt-20">
                <div className="sports-section-title-wrap">
                    <div className="sports-section-title">
                        <h2 className="title">Sports</h2>
                    </div>
                </div>
                <div className="sports-section-line"></div>
                <Col md={7}>
                <Sports_Hotline/></Col>
           <Col md={5}>
           <Sports_Option/></Col>
           
           </Row>
       
         
        </>

  )
}

export default Sports_Headlins
