import React from 'react'
import {Container,Row} from 'react-bootstrap'
import Business_Column from './Business_Column';

function Sidebar_Business_Sectio() {
  return (
    <div>
        <Container>
        <Row className="sports-section mt-20">
                <div className="sports-section-title-wrap">
                    <div className="sports-section-title">
                        <h2 className="title">Business</h2>
                    </div>
                </div>
                <div className="sports-section-line"></div>
               <div className="business_column_content"><Business_Column/></div>
           
           </Row>
        </Container>
     
    </div>
  )
}

export default Sidebar_Business_Sectio
