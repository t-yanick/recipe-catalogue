import { combineReducers } from 'redux';
import categoriesReducer from './getCategoriesReducer';
import foodsReducer from './getFoodsReducer'

const rootReducer = combineReducers({
  categories: categoriesReducer,
  foods: foodsReducer,
});

export default rootReducer;
