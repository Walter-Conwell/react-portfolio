import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAILJS_USER_ID;

function Footer() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
    const form = useRef();
    const [emailError, setEmailError] = useState(""); // State to hold validation error

    const sendEmail = (e) => {
      e.preventDefault();
        // const declaration = regex that validates email format
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        // email format checked with if statement
        if (!emailRegex.test(formData.email)) {
          setEmailError("Invalid email format");
          return; // Prevent form submission if email is invalid
        }
        // if true, email is sent by using process.env to protect sensitive data.
      emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
        .then((result) => {
          console.log('Email sent successfully:', result);
          alert("Email sent!");
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          
        });
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

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
          <Form className="form" ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="firstName lastName" name="name" value={formData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="name@example.com" name="email" value={formData.email} onChange={handleChange}/>
            </Form.Group>
            {/* emailError render */}
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} />
            </Form.Group>
            <Button className="btn btn-primary" style={{ backgroundColor: "#5bd475" }} type="submit">Submit</Button>
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
