import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import MealList from '../containers/MealList';

describe('Creates a component', () => {
  const middlewares = [thunk];
  const initialState = { meals: ['chicken'] };
  const mockStore = configureStore(middlewares);
  let store;
  it('renders correctly', () => {
    store = mockStore(initialState);
    const tree = renderer.create(
      <Provider store={store}>
        <MealList />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});