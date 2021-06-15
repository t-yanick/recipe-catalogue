import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Image, Container, Loader, Table, Segment } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import { fetchIngredientsStartAsync } from '../actions/getIngredients';
import '../App.css';

const IngredientsList = () => {
  const ingredients = useSelector(state => state.ingredients.ingredients);
  const dispatch = useDispatch();

  const { pathname } = window.location;

  const id = pathname.split('/ingredients/')[1];

  useEffect(() => {
    dispatch(fetchIngredientsStartAsync(id));
  }, []);

  if (!ingredients) {
    return <Loader active inline="centered" />
  }

  const keys = Object.values(ingredients)[0];

  const strIngredient = [];
  Object.keys(keys).forEach(i => {
    if (i.includes('strIngredient')) {
      strIngredient.push(keys[i]);
    }
  });

  const strMeasure = [];
  Object.keys(keys).forEach(i => {
    if (i.includes('strMeasure')) {
      strMeasure.push(keys[i]);
    }
  });

  return (
    <Container style={{ display: 'flex', paddingBottom: 50 }}>
      {ingredients.map(i => (
        <Segment key={i.idMeal}>
          <p className="mt-4">
            Category:
            {' '}
            {i.strCategory}
          </p>
          <h2>{i.strMeal}</h2>
          <Image src={i.strMealThumb} height='300rem' centered />
          <Container style={{ margin: 30 }}>
            <Table className="Table" celled style={{ margin: 'auto' }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell className="TableHead">Ingredients</Table.HeaderCell>
                  <Table.HeaderCell className="TableHead">Measure</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body celled>
                <Table.Row>
                  <Table.Cell className="TableCell">
                    {strIngredient.map(i => (
                      <Header as="h6" key={`${i}_${Math.random() * 100}`}>
                        {i}
                      </Header>
                    ))}
                  </Table.Cell>
                  <Table.Cell className="TableCell">
                    {strMeasure.map(m => (
                      <Header as="h6" key={`${m}_${Math.random() * 100}`}>
                        {m}
                      </Header>
                    ))}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Container>
          <h4>Instructions</h4>
          <p>
            {i.strInstructions}
          </p>
          <Link to="/"><Button variant="primary">
            Back to Home
                  </Button></Link>
        </Segment>
      ))}
    </Container>
  );


};

export default IngredientsList;