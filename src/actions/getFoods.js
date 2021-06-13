import axios from 'axios';
import { FoodsActionTypes } from './actionTypes';

export const fetchFoodsStart = () => ({
  type: FoodsActionTypes.FETCH_FOODS_START,
});

export const fetchFoodsSuccess = (meals) => ({
  type: FoodsActionTypes.FETCH_FOODS_SUCCESS,
  meals,
});

export const fetchFoodsFailure = (error) => ({
  type: FoodsActionTypes.FETCH_FOODS_FAILURE,
  error,
});

export const fetchFoodsStartAsync = (meals) => {
  return dispatch => {
    dispatch(fetchFoodsStart());
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meals}`)
      .then(res => dispatch(fetchFoodsSuccess(res.data.meals)))
      .catch(error => dispatch(fetchFoodsFailure(error)))
  };
};
