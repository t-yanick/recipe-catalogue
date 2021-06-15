import { combineReducers } from 'redux';
import categoriesReducer from './getCategoriesReducer';
import mealsReducer from './getMealsReducer';
import ingredientsReducer from './getIngredientsReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  meals: mealsReducer,
  ingredients: ingredientsReducer,
});

export default rootReducer;
