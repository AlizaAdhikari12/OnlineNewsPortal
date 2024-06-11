import React from 'react'
import {Container, Row } from 'react-bootstrap'
const AdHomepage = () => {
  return (
    <div>
        <Container>
        <Row className="mt-3 mb-4">
        <div className="w-full h-28 overflow-hidden">
            <img src="images/ad1.png" alt="ad1" className="w-full h-full object-contain"></img>
            </div>
      </Row>
      </Container>
    </div>
  )
}

export default AdHomepage
