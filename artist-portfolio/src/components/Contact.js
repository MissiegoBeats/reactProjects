import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {

  const generateMail = event => {
    event.preventDefault();
    const name = event.target.formName.value;
    const subject = event.target.formSubject.value;
    const message = event.target.formMessage.value;
    window.open('mailto:pmitestsuah@gmail.com?subject=' + subject +' - Sent by '+ name + '&body=' + message);
  };

  return (
    <div>
      <Container className="contact bg-dark" data-bs-theme="dark" expand="lg" style={{width:"100%"}} id="contact">
        <Row className="justify-content-center bg-dark" data-bs-theme="dark" expand="lg" style={{color:"white"}}>
          <Col xs={12} sm={8} md={6}>
            <h2 class="text-center">Contact Me</h2>
            <Form onSubmit={generateMail}>
              <Form.Group controlId="formName" style={{marginTop: "10px"}}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formSubject" style={{marginTop: "20px"}}>
                <Form.Label>Email subject</Form.Label>
                <Form.Control type="subject" placeholder="Enter your subject" />
              </Form.Group>
              <Form.Group controlId="formMessage" style={{marginTop: "20px"}}>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button class="btn btn-light btn-lg btn-block" type="submit" style={{marginTop: "20px", marginBottom:"10px", width:"100%"}} >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
