import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Categories from '../components/Categories';
import MealList from './MealList';

const Home = () => {
  const [state, setState] = useState('Beef');
  const dispatch = useDispatch

  const handleCategoryChange = (category) => {
    setState(category);
  };

  return (
    <div>
      <Categories onCategoryChange={handleCategoryChange} />
      <MealList handleChange={handleCategoryChange} cat={state} />
    </div>
  );
};

export default Home;