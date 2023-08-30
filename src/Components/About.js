import React from 'react';
import { Card } from "react-bootstrap";
// import { Col, Container, Image, Row } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';

function About() {
  return (
    <div className="Container">
      <section id="About">
        <h1 className="header bg-dkblue">About</h1>
        <Card>
        <Card.Img variant="top" src={"https://github.com/Walter-Conwell/codeQuizGame/raw/main/Develop/assets/images/image-1.png"} />
        <Card.Body>
          <Card.Title>{"Codenundrum"}</Card.Title>
          <Card.Text>{"Test your skills in a multiple-choice Javascript quiz!"}</Card.Text>
          <a href={"https://github.com/Walter-Conwell/codeQuizGame"} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href={"https://walter-conwell.github.io/codeQuizGame/"} className="btn btn-primary" target="_blank" rel="noopener noreferrer" >Live Link</a>
        </Card.Body>
      </Card>
        <p id="text">
          Hello! My name is Walter Conwell Jr. I'm a recent graduate of the Edx
          Full Stack Web Development Bootcamp at the University of Denver. I've
          always been fascinated by the programming. And in recent years, I've
          been putting in a great effort to get better at the craft. In order to
          get better at the things we love, it takes time and effort. It feels
          like a short time ago when I was experimenting with C++ and Python.
          Now through intense perserverance and love of the craft, I'm a Full
          Stack Web Dev! While I lean towards UI, I am always eager to work on
          backend projects as well. I am very excited for the future
          oppurtunities and experiences that await! Check out the Portfolio
          section of this app! Or if you would like to reach out, go to the
          Contact section
        </p>
      </section>
    </div>
  );
}
export default About;
