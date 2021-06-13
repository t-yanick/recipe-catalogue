import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./components/NavBar";
import './App.css'
import Categories from './components/Categories';
import FoodList from './containers/FoodList';
// import { useDispatch } from 'react-redux';

const App = () => {
  const [state, setState] = useState('Beef');
  // const dispatch = useDispatch

  const handleCategoryChange = (category) => {
    setState(category);
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Categories onCategoryChange={handleCategoryChange} />
        <FoodList handleChange={handleCategoryChange} cat={state} />
      </Router>
    </div>
  );
}

export default App;
