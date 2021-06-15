import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Container } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import { fetchMealsStartAsync } from '../actions/getMeals';
import { CardColumns } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

const MealList = (props) => {
  const { cat } = props;
  const meals = useSelector(state => state.meals.meals);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMealsStartAsync(cat));
  }, [cat]);

  return (
    <Container textalign="center" style={{ marginTop: 40 }}>
      <Grid >
        <Grid.Row>
          {
            meals && meals.map(meal => (
              <CardColumns
                key={meal.strMeal}
                style={{ marginTop: 20 }}
                as={Link}
                to={{
                  pathname: `/ingredients/${meal.idMeal}`,
                  id: meal.idMeal,
                }}
              >
                <Card className="m-2 pb-1" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={meal.strMealThumb} />
                  <Card.Body>
                    <Card.Title>
                      {meal.strMeal}
                    </Card.Title>
                    <Button variant="primary">
                      Get Recipe
                  </Button>
                  </Card.Body>
                </Card>
              </CardColumns>
            ))
          }
        </Grid.Row>
      </Grid>
    </Container>
  );
};

MealList.propTypes = {
  cat: PropTypes.string,
};

MealList.defaultProps = {
  cat: '',
};

export default MealList;
