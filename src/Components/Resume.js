import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navigation from "./Components/Navigation";
// import Header from "./Components/Header"
// import About from "./Components/About"
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "./Components/Footer";
// import Portfolio from "./Components/Portfolio";

function Resume() {
  return (
    <div>
      <section className="Resume">
        <h1 className="header">Resume</h1>
        <p id="text">To be added</p>
        {/* link pdf for resume display */}
      </section>
      <button className="btn btn-primary">Download</button>
    </div>
  );
}
export default Resume;
