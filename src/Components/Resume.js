import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PDF from "../Images/conwell.walter.resume.pdf";

// resume can be downloaded on either mobile or from a regular web browser!
// also if you don't want to download it, feel free to scroll through it within the viewport.

function Resume() {
  return (
    <div className="resumeContainer">
    <section className="Resume" width="fluid" >
      <h1 className="header">Resume</h1>
      <br />
      <iframe style={{ width:"90vw", height:"40vw", }} src={PDF} title="Resume PDF"></iframe>
    <a href={PDF} download="conwell.walter.resume.pdf">
      {/* button placed inside <a> makes it so that the button calls the link when clicked, executing the download! */}
      <button className="btn btn-primary" style={{ backgroundColor: "#5bd475" }}>Download</button>
    </a>
    <br />
    </section>
  </div>
  );
}
export default Resume;
