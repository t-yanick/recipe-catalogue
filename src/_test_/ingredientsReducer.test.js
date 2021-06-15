import ingredientsReducer from '../reducers/getIngredientsReducer';

describe('Ingredients Reducer', () => {
  it('1. Checks the default state is returned', () => {
    const mockState = undefined;
    const mockAction = { type: 'any' };
    const mockFetching = false;
    const state = ingredientsReducer(mockState, mockAction, mockFetching);
    expect(state).toStrictEqual({
      errorMessage: undefined,
      ingredients: [],
      isFetching: false,
    });
  });

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = {
        ingredients: [],
        active: 'Some Active Ingredients',
      };
      const mockAction = { type: 'any' };
      const state = ingredientsReducer(mockState, mockAction);
      expect(state).toStrictEqual({
        ingredients: [],
        active: 'Some Active Ingredients',
      });
    },
  );
});
