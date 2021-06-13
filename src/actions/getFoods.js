import axios from 'axios';
import { FoodsActionTypes } from './actionTypes';

export const fetchFoodsStart = () => ({
  type: FoodsActionTypes.FETCH_FOODS_START,
});

export const fetchFoodsSuccess = (foods) => ({
  type: FoodsActionTypes.FETCH_FOODS_SUCCESS,
  foods,
});

export const fetchFoodsFailure = (error) => ({
  type: FoodsActionTypes.FETCH_FOODS_FAILURE,
  error,
});

export const fetchFoodsStartAsync = () => {
  return dispatch => {
    dispatch(fetchFoodsStart());
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?c=${foods}`)
      .then(res => dispatch(fetchFoodsSuccess(res.data.foods)))
      .catch(error => dispatch(fetchFoodsFailure(error)))
  };
};
