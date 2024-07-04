import React from 'react';
import './Subs_Form.scss';
import { Button, Container, Row, Col, Form,Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect,useRef } from 'react';

function Subs_Form() {
  const initalValue = {username:"",email:""};
  const [formValue,setFormValue]=useState(initalValue);
  const[formError,setFormError]=useState("")
  const [isSubmit,setIsSubmit]=useState(false);
  const [showThankyou,setshowThankyou]=useState(false);

  const usernameErrorRef = useRef(null);
  const emailErrorRef =useRef(null);
  
  const handleChanges =(e)=>{
    const {name,value} = e.target;
    setFormValue({...formValue,[name]:value})
      }
  
const handleSubmit =(e) =>{
e.preventDefault();
setFormError(validate(formValue));
setIsSubmit(true);
  }

  useEffect(()=>{
if(Object.keys(formError).length ===0  && isSubmit){
  setshowThankyou(true);
  setIsSubmit(false)
  }
  if(formError.username && usernameErrorRef.current){
usernameErrorRef.current.style.color="red";
  }
if(formError.email && emailErrorRef.current){
  emailErrorRef.current.style.color="red"
}}
  ,[formError]);
  
  const validate =(values) =>{
    const errors={}
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if(!values.username){
  errors.username ="PLease fill the form username";
}

if(!values.email){
  errors.email="please fill the form of email";
}else if(!regex.test(values.email)){
  errors.email="This is not valid email, please try again"
}
return errors;
  }
  return (
    <div className="subscriber_container">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <div className="subscriber_title">
              <h2>Get Subscribe To Our Latest News & Update</h2>
            </div>
            <Form onSubmit={handleSubmit}>
            <div className="subscriber_form">
             
              <input type="text" 
              placeholder="Name"
                name="username" 
                className="form-control" 
              value={formValue.username} 
                onChange={handleChanges}
                />
                 <p ref={usernameErrorRef }>{formError.username}</p>
              
              <input type="email"
               placeholder="E-mail"
                name="email"
                 className="form-control" 
                 value={formValue.email}
                  onChange={handleChanges} 
                  />
                   <p ref={emailErrorRef }>{formError.email}</p>
              <Button  type="submit" className="submit_button">Submit Now</Button>
            </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Modal show ={showThankyou} onHide={()=>setshowThankyou(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for subscribing to our latest news and updates.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setshowThankyou(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Subs_Form;
  