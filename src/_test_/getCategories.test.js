import axios from 'axios';

describe('Api communications module', () => {
  it(
    '1. Checks the get Categories method',
    async () => {
      const data = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res) => res);
      expect(data).toBeInstanceOf(Object);
    },
  );

  it(
    '2. Checks the get one Category info method',
    async () => {
      const data = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken').then((res) => res);
      expect(data).toBeInstanceOf(Object);
    },
  );
});
