import { combineReducers } from 'redux';
import categoriesReducer from './getCategoriesReducer';
import mealsReducer from './getMealsReducer'

const rootReducer = combineReducers({
  categories: categoriesReducer,
  meals: mealsReducer,
});

export default rootReducer;
