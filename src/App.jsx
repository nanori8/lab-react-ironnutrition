import React, { Component } from 'react';
import './App.scss';
import meals from './meals.json';
import MealBox from './component/mealbox';
// import meals from './meals';
// import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container'
// import Media from 'react-bootstrap/Media'

class App extends Component {
  constructor() {
    super();
    this.state = {
      meals: meals,
      firstMeal: meals.slice(0, 1)
    };
    console.log('meals', meals);
  }

  render() {
    return (
      <div >
        {this.state.meals.map((meal) => {
          return <MealBox image={meal.image} name={meal.name} calories={meal.calories} />;
        })}
      </div>
    );
  }
}

export default App;
