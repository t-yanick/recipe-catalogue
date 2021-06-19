import axios from 'axios';

describe('Api communications module', () => {
  it(
    'Checks the get Meals method',
    async () => {
      const data = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then((res) => res);
      expect(data).toBeInstanceOf(Object);
    },
  );
});
