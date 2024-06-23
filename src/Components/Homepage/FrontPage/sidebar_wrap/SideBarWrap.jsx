import React from 'react'
import { Container,Button } from 'react-bootstrap'
import "./sidebar_wrap.scss"
function SideBarWrap() {
  return (
   <>
   <Container>
        <div className="sider_wrap">
        <div className="sidebar_wrap_container">
        <div className="sidebar_wrap_title">
            <h2>Daily Newsletter</h2>
            <p>Get All The Top Stories From Blogs To Keep Track.</p>
        </div>
        <div className="sidebar_wrap_submission">
            <input type="text" placeholder='Enter your E-maul'></input>
            <div className="agreeterms">
            <input type="checkbox" id="agreeTerms" name="agreeTerms" className='checkbox' />
            <label htmlFor="agreeTerms">I agree to the terms and conditions</label>
            </div>
            <Button className="submit_button">Submit Now</Button>
        </div>
    </div>
        </div>
    </Container>
   </>
  )
}

export default SideBarWrap