import { FoodsActionTypes } from '../actions/actionTypes';

const INITIAL_STATE = {
  meals: [],
  isFetching: false,
  errorMessage: undefined,
};

const foodsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FoodsActionTypes.FETCH_FOODS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FoodsActionTypes.FETCH_FOODS_SUCCESS:
      return {
        ...state,
        meals: action.meals,
        isFetching: false,
      };
    case FoodsActionTypes.FETCH_FOODS_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default foodsReducer;
