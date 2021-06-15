import categoriesReducer from '../reducers/getCategoriesReducer';

describe('Categories Reducer', () => {
  it('1. Checks the default state is returned', () => {
    const mockState = undefined;
    const mockAction = { type: 'any' };
    const mockFetching = false;
    const state = categoriesReducer(mockState, mockAction, mockFetching);
    expect(state).toStrictEqual({
      errorMessage: undefined,
      categories: [],
      isFetching: false,
    });
  });

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = {
        categories: [],
        active: 'Some Active Categories',
      };
      const mockAction = { type: 'any' };
      const state = categoriesReducer(mockState, mockAction);
      expect(state).toStrictEqual({
        categories: [],
        active: 'Some Active Categories',
      });
    },
  );
});
