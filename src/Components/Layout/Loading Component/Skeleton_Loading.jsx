import React from 'react'
import { Card, Container,Row } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import '../../Game/Game.scss'
function Skeleton_Loading() {
  return (
    <div>
      <Container>
        <Row className="mt-5">
        {
            Array.from({ length: 4 }).map((_, index) => (
          <Card style={{ width: '15rem' }}  className="Card" key={index}>
          <div className="card_numb">
        <Skeleton height={150}/>
          </div>
          <Card.Body>
            <Card.Title className="card_title"><Skeleton width={'70%'}/></Card.Title>
            <Card.Text className="card_text">
         <Skeleton count={4}/>
            </Card.Text>
            <Skeleton width={50}/>
          </Card.Body>
        </Card>
       ))
}
        </Row>
      </Container>
   
    </div>
  )
}

export default Skeleton_Loading