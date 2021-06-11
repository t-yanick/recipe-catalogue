import { combineReducers } from 'redux';
import categoriesReducer from './getCategoriesReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default rootReducer;
