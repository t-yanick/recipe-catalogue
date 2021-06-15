import { IngredientsActionTypes } from '../actions/actionTypes';

const INITIAL_STATE = {
  ingredients: [],
  isFetching: false,
  errorMessage: undefined,
};

const ingredientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IngredientsActionTypes.FETCH_INGREDIENTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case IngredientsActionTypes.FETCH_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.ingredients,
        isFetching: false,
      };
    case IngredientsActionTypes.FETCH_INGREDIENTS_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default ingredientsReducer;
