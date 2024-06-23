import React from 'react'
import { Row} from "react-bootstrap" 
import Hot_News_Option from './Hot_News_Option'
import './hot_News_Heading.scss'

function Hot_News_Headline() {
  return (
    <>
     <Row className="politics-post-section">
      <div className="section-title-wrap">
        <div className="section-title">
          <h2 className="title">Today's Hot Spot</h2>
          <div className="section-title-line"></div>
        </div>
      </div>
      <Hot_News_Option/>
    </Row>
   </>
  )
}
export default Hot_News_Headline
