import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoriesStartAsync } from '../actions/getCategories';

const Categories = (props) => {
  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  });

  const handleChange = e => {
    props.onCategoryChange(e.target.value);
  };

  return (
    <div>
      <h3>Select a category</h3>
      <select className="category" placeholder="Select Category" onChange={handleChange}>
        {categories && categories.map(cat => (
          <option key={cat.idCategory} value={cat.strCategory}>
            {cat.strCategory}
          </option>
        ))}
      </select>
    </div>
  );
};

Categories.propTypes = {
  onCategoryChange: PropTypes.func,
};

Categories.defaultProps = {
  onCategoryChange: null,
}

export default Categories;