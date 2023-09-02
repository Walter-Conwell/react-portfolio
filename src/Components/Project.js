import React from "react";
import { Card, Container } from "react-bootstrap";

const Project = ({ imageUrl, title, description, projectUrl }) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <br />
            <section style={{ margin: "10px", minwidth: "180px" }}>
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
            </section>
            <br />
            <section style={{ margin: "10px" }}>
            <Card>
        <Card.Img variant="top" src={"https://github.com/Walter-Conwell/parentSchedulingApp/raw/main/screenshot.png"} />
        <Card.Body>
          <Card.Title>{"parentSchedulingApp"}</Card.Title>
          <Card.Text>{"Connect to your Child's resources with this scheduling app made for Parents!"}</Card.Text>
          <a href={"https://github.com/Walter-Conwell/parentSchedulingApp"} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href={"https://murmuring-shelf-98145-47fc04f5ec66.herokuapp.com/"} className="btn btn-primary" target="_blank" rel="noopener noreferrer" >Live Link</a>
        </Card.Body>
      </Card>
            </section>
            <section style={{ margin: "10px" }}>
            <Card>
        <Card.Img variant="top" src={"https://raw.githubusercontent.com/Walter-Conwell/noteTaker/main/public/assets/images/image.png"} />
        <Card.Body>
          <Card.Title>{"noteTaker"}</Card.Title>
          <Card.Text>{"Track your notes with this awesome note taking apps!"}</Card.Text>
          <a href={"https://github.com/Walter-Conwell/noteTaker"} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href={"https://note-taker-8-14-23-3695530229ce.herokuapp.com/"} className="btn btn-primary" target="_blank" rel="noopener noreferrer" >Live Link</a>
        </Card.Body>
      </Card>
            </section>
            <br />
            <section style={{ margin: "10px" }}>
            <Card>
        <Card.Img variant="top" src={"https://github.com/Walter-Conwell/svgLogoMaker/assets/131832544/2d7fd6c4-4d4f-4ba6-be53-b8c3a4cade6f"} />
        <Card.Body>
          <Card.Title>{"svgLogoMaker"}</Card.Title>
          <Card.Text>{"Save time creating a logo for your business with this SVG Logo Generator!"}</Card.Text>
          <a href={"https://drive.google.com/file/d/1qeTTFTZZj85pUeA6Of9Ln2iRCS5Z6fQ4/view"} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href={"https://github.com/Walter-Conwell/svgLogoMaker"} className="btn btn-primary" target="_blank" rel="noopener noreferrer" >Live Link</a>
        </Card.Body>
      </Card>
            </section>
            <br />
            <section style={{ margin: "10px" }}>
            <Card>
        <Card.Img variant="top" src={"https://raw.githubusercontent.com/Walter-Conwell/jsPasswordGenerator/main/assets/images/image-2.png"} />
        <Card.Body>
          <Card.Title>{"Password Generator"}</Card.Title>
          <Card.Text>{"Create a new password with this Javascript password generator!"}</Card.Text>
          <a href={"https://github.com/Walter-Conwell/jsPasswordGenerator"} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href={"https://github.com/Walter-Conwell/svgLogoMaker"} className="btn btn-primary" target="_blank" rel="noopener noreferrer" >Live Link</a>
        </Card.Body>
      </Card>
            </section>
            <br />
            <section style={{ margin: "10px" }}>
            <Card>
        <Card.Img variant="top" src={"https://user-images.githubusercontent.com/131832544/260524868-6ce7e916-fb5b-4169-b400-7edf55b6e4ac.png"} />
        <Card.Body>
          <Card.Title>{"Blueit"}</Card.Title>
          <Card.Text>{"Express your creativity and connect with others with this blog-type website"}</Card.Text>
          <a href={"https://github.com/Paulsig007/Blueit"} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href={"https://blueit-79b9e15820d2.herokuapp.com/"} className="btn btn-primary" target="_blank" rel="noopener noreferrer" >Live Link</a>
        </Card.Body>
      </Card>
            </section>
        </div>
    );
  }
export default Project;