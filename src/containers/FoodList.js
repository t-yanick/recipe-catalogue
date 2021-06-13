import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid, Image, Card, Container,
} from 'semantic-ui-react';
import { fetchFoodsStartAsync } from '../actions/getFoods';

const FoodList = (props) => {
  const { category } = props;
  const meals = useSelector(state => state.meals?.meals);
  // const meals = useSelector(state => state.meals.meals);
  // const meals = useSelector(state => { console.log(state); return state.meals })

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoodsStartAsync(category));
  }, [category, dispatch]);

  return (
    <Container textalign="center" style={{ marginTop: 40 }}>
      <Grid columns={3}>
        <Grid.Row>
          {meals && meals.map(meal => (
            <Grid.Column
              key={meal.strMeal}
              style={{ marginTop: 20 }}
              as={Link}
              to={{
                pathname: `/ingredients/${meal.idMeal}`,
                id: meal.idMeal,
              }}
            >
              <Card>
                <Image src={meal.strMealThumb} />
                <Card.Content>
                  <Card.Description>
                    {meal.strMeal}
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

FoodList.propTypes = {
  category: PropTypes.string,
};

FoodList.defaultProps = {
  category: '',
};

export default FoodList;
