import { CategoriesActionTypes } from '../actions/actionTypes';

const INITIAL_STATE = {
  categories: [],
  isFetching: false,
  errorMessage: undefined,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case CategoriesActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        isFetching: false,
      };
    case CategoriesActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
