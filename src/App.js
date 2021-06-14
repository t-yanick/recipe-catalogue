import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from './containers/Home';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        {/* <Home /> */}
      </Router>
    </div>
  );
}

export default App;
