import React from 'react';
import { Card } from "react-bootstrap";


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
Web Development Coding Bootcamp at the University of Denver. My strenghts are in React, React-Bootstrap, and node.js. In my learned experience - communication and being open to new solutions is crucial to being an effective programmer. This mindset has helped me learn such technologies: node.js, MySQL, MongoDB, and React. Communication, compassion, perseverance,
and support is what I will provide to any team. I am very excited for the future
opportunities that await! Click on the indivdual navigation items in the navbar to see their respective component dynamically render in the body element! Download my resume or view it within the Resume section. Check out the Portfolio
section of this app to see some of my work! And If you would like to reach out about any questions or business inquiries - go to the
Contact section in the navbar!
        </p>
      </section>
    </div>
  );
}
export default About;
