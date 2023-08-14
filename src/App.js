import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
// import Header from "./Components/Header"
import About from "./Components/About"
// import Footer from "./Components/Footer"
// import Portfolio from "./Components/Portfolio"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      <About/>

      </Router>
      {/* <Header/> */}
      {/* <Portfolio/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
