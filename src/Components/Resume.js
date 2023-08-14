import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navigation from "./Components/Navigation";
// import Header from "./Components/Header"
// import About from "./Components/About"
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from "./Components/Footer";
// import Portfolio from "./Components/Portfolio";

function Resume() {
    return (
      <div>
        <section className="Resume">
          <h1 className="header">Resume</h1>
          <p id="text">walterdanteconwelljr@gmail.com</p>
          <p id="text">Github Profile: https://github.com/Walter-Conwell</p>
        </section>
        <form>lorem</form>
      </div>
    );
  }
  export default Resume;