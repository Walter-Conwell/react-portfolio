import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <div className="Footer">
      <section id="Footer" className="Footer">
        <h1 className="header">Contact</h1>
        <Container className="contactInfo" style={{ display: "block", width:"auto" }} >
          <br />
          <p className="email" style={{ fontSize: "16px", display: "inline-flex", justifyContent: "center", margin: "0", textAlign: "center" }}>
            Email Me Here: walterdanteconwelljr@gmail.com - Or enter your info into the below fields, and I will reach out to you!
          </p>

        <Container>
          <Form className="form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" placeholder="firstName lastName" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Container>
        <br />
        {/* icon links: Linkedin, GitHub */}
        <footer className="iconLinks" style={{fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", margin: "auto" }}>
          
          <a style={{ marginRight: "10px" }} href={"https://www.linkedin.com/in/walter-conwell-575586159/"} >
          <img className="Icon" style={{ height: "40px", width: "40px" }} src="https://th.bing.com/th/id/OIP.EIJEIp5je4VfUmBcuf1ivAHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7" alt="LinkedinProfile"></img>
          </a>
          <a style={{ marginLeft: "10px" }} href={"https://github.com/Walter-Conwell"} >
          <img className="Icon" style={{ height: "40px", width: "40px" }} src="https://th.bing.com/th?id=OIP.ckeUFk-yid0vfWnd56w7wAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="LinkedinProfile"></img>
          </a>
          </footer>
        </Container>
      </section>
    </div>
  );
}
export default Footer;
