import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Categories from '../components/Categories';

describe('Creates a component', () => {
  const middlewares = [thunk];
  const initialState = { categories: [{ cat: 'lamb' }] };
  const mockStore = configureStore(middlewares);
  let store;
  it('renders correctly', () => {
    store = mockStore(initialState);
    const tree = renderer.create(
      <Provider store={store}>
        <Categories />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a component', () => {
    store = mockStore(initialState);
    render(<Provider store={store}><Categories /></Provider>);
    const element = screen.getByText('Select a category');
    expect(element).toBeInTheDocument();
  });
});
