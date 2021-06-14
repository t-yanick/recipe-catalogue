import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Image, Container } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import { fetchMealsStartAsync } from '../actions/getMeals';
import { CardColumns } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

const MealList = (props) => {
  const { cat } = props;
  // const meals = useSelector(state => state.meals?.meals);
  const meals = useSelector(state => state.meals.meals);
  // const meals = useSelector(state => { console.log(state); return state.meals })

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
                  {/* <Image src={meal.strMealThumb} /> */}
                  <Card.Img variant="top" src={meal.strMealThumb} />
                  {/* <Card.Content> */}
                  <Card.Body>
                    {/* <Card.Description> */}
                    <Card.Title>

                      {meal.strMeal}
                    </Card.Title>
                    {/* </Card.Description> */}

                    <Button variant="primary">
                      Get Recipe
                  </Button>
                  </Card.Body>
                  {/* </Card.Content> */}
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
