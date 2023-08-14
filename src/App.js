import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
// import Header from "./Components/Header"
import About from "./Components/About"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";

function App() {
  return (
    <div className="App bg dkblue">
      <Router>
      <Navigation/>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
