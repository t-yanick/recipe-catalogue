import axios from 'axios';
import { IngredientsActionTypes } from './actionTypes';

export const fetchIngredientsStart = () => ({
  type: IngredientsActionTypes.FETCH_INGREDIENTS_START,
});

export const fetchIngredientsSuccess = (ingredients) => ({
  type: IngredientsActionTypes.FETCH_INGREDIENTS_SUCCESS,
  ingredients,
});

export const fetchIngredientsFailure = (error) => ({
  type: IngredientsActionTypes.FETCH_INGREDIENTS_FAILURE,
  error,
});

export const fetchIngredientsStartAsync = (id) => {
  return dispatch => {
    dispatch(fetchIngredientsStart());
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => dispatch(fetchIngredientsSuccess(res.data.meals)))
      .catch(error => dispatch(fetchIngredientsFailure(error)))
  };
};
