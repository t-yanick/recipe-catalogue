import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import Categories from '../components/Categories';
import FoodList from './FoodList';

const Home = () => {
  const [state, setState] = useState('Beef');
  // const dispatch = useDispatch

  const handleCategoryChange = (category) => {
    setState(category);
  };

  return (
    <div>
      <Categories onCategoryChange={handleCategoryChange} />
      <FoodList handleChange={handleCategoryChange} cat={state} />
    </div>
  );
};

export default Home;