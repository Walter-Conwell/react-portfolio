import React from "react";
// import { HashRouter } from 'react-router-dom';
import { HashRouter, Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";
import Navigation from "./Components/Navigation";
// import Header from "./Components/Header"
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/react-portfolio/" element={<About />} />
          <Route path="/react-portfolio/#/Portfolio" element={<Portfolio />} />
          <Route path="/react-portfolio/#/Resume" element={<Resume />} />
          <Route path="/react-portfolio/#/Footer" element={<Footer />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
