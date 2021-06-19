import axios from 'axios';

describe('Api communications module', () => {
  it(
    'Checks the get Ingredients method',
    async () => {
      const data = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52807').then((res) => res);
      expect(data).toBeInstanceOf(Object);
    },
  );
});
