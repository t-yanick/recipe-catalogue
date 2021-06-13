import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFoodsStartAsync } from '../actions/getFoods';

const FoodList = (props) => {
  const { category } = props;
  const foods = useSelector(state => state.foods.foods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoodsStartAsync(category));
  });

  return (
    <div>
      {foods && foods.map(food => (
        <div> key={ food.strFood}</div>
      ))}
    </div>
  );
};

FoodList.propTypes = {
  category: PropTypes.string,
};

FoodList.defaultProps = {
  category: '',
};

export default FoodList;
