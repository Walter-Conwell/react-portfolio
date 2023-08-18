import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <div className="Footer">
      <section id="Footer" className="Footer">
        <h1 className="header">Contact</h1>
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Container>
      </section>
    </div>
  );
}
export default Footer;
