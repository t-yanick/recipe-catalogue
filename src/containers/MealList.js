import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Container } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import { CardColumns } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { fetchMealsStartAsync } from '../actions/getMeals';

const MealList = (props) => {
  const { cat } = props;
  const meals = useSelector((state) => state.meals.meals);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMealsStartAsync(cat));
  }, [cat]);

  return (
    <Container textalign="center" style={{ marginTop: 40 }}>
      <Grid>
        <Grid.Column className="d-flex flex-wrap mx-5 col-md-12">
          {
            meals && meals.map((meal) => (
              <CardColumns
                key={meal.strMeal}
                style={{ marginTop: 20 }}
                as={Link}
                to={{
                  pathname: `/ingredients/${meal.idMeal}`,
                  id: meal.idMeal,
                }}
              >
                <Card className="m-1 mx-4 pb-1" style={{ width: '18rem' }}>
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
        </Grid.Column>
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
