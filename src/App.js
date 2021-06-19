import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import About from './components/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IngredientsList from './containers/IngredientsList';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/ingredients/:id" component={IngredientsList} />
        <Route exact path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
