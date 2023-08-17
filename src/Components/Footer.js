import React from "react";
import Form from "react-bootstrap/Form";
function Footer() {
  return (
    <div>
      <section className="Contact">
        <h1 className="header bg=dkblue">Contact</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </section>
    </div>
  );
}
export default Footer;
