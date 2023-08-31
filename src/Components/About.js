import React from 'react';
import { Card } from "react-bootstrap";
// import { Container } from 'react-bootstrap';
// import { Col, Container, Image, Row } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';

function About() {
  return (
    <div className="Container" style={{ display: "flex" }}>
      <section id="About">
        <h1 className="header bg-dkblue">About</h1>
        <br />
        <div className="card-container"></div>
        <Card className="CardAbout" style={{ alignItems: "center", display: "flex", justifyContent:"center" }}>
        <Card.Img variant="top" src={"https://media.licdn.com/dms/image/D5603AQHH-wJX6qn4wA/profile-displayphoto-shrink_200_200/0/1693244036239?e=1698883200&v=beta&t=h56bmIeyvhVYdG4J8lic2nMVNCFN2vskuV8Fuga6xZE"} />
        <Card.Body>
          <Card.Title style={{ fontSize: "16px", textAlign: "center" }}>{"Full-stack Flex Dev"}</Card.Title>
        </Card.Body>
      </Card>
      <br />
        <p id="text">
        Hello! My name is Walter Conwell Jr. I'm a graduate of the EdX Full Stack 
Web Development Coding Bootcamp at the University of Denver. I love
building with React, and I persistently learn new technologies/tools
to keep my skills sharp. Communication and being open to new solutions is crucial to 
my workflow. This mindset has helped me learn such technologies as
node.js, MySQL, MongoDB, and React. Communication, focus, flexibility,
and support are the things I will provide to any team. In order to
get better at the things we love, it takes time and effort. I am very excited for the future
opportunities and experiences that await! Check out the Portfolio
section of this app! Or if you would like to reach out, go to the
Contact section in the navbar!
        </p>
      </section>
    </div>
  );
}
export default About;
