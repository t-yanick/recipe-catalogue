import mealsReducer from '../reducers/getMealsReducer';

describe('Meals Reducer', () => {
  it('1. Checks the default state is returned', () => {
    const mockState = undefined;
    const mockAction = { type: 'any' };
    const mockFetching = false;
    const state = mealsReducer(mockState, mockAction, mockFetching);
    expect(state).toStrictEqual({
      errorMessage: undefined,
      meals: [],
      isFetching: false,
    });
  });

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = {
        meals: [],
        active: 'Some Active Meals',
      };
      const mockAction = { type: 'any' };
      const state = mealsReducer(mockState, mockAction);
      expect(state).toStrictEqual({
        meals: [],
        active: 'Some Active Meals',
      });
    },
  );
});
