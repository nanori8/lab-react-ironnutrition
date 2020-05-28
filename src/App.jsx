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
      firstMeal: meals.slice(0, 1),
      viewForm: false
    };
    console.log('meals', meals);
  }

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { name, calories, image } = this.state;
    console.log(name, calories, image);
    this.setState({
      meals: [...this.state.meals, { name, calories, image }],
      viewForm: false
    });
  };

  handleInputChange = (event) => {
    const $domNode = event.target;
    const value = $domNode.value;
    const name = $domNode.name;

    this.setState({
      [name]: value
    });
  };

  newMeal = (event) => {
    event.preventDefault();
    this.setState({
      viewForm: true
    });
  };

  render(props) {
    return (
      <div>
        <form>
          <button onClick={this.newMeal}> Add new meal </button>
        </form>

        <div>
          {this.state.viewForm ? (
            <div>
              It's true
              <form onSubmit={this.handleFormSubmission}>
                <input
                  className="form-new-meal"
                  name="name"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleInputChange}
                  placeholder="Insert name"
                />
                <input
                  className="form-new-meal"
                  name="calories"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleInputChange}
                  placeholder="Insert number of calories"
                />
                <input
                  className="form-new-meal"
                  name="image"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleInputChange}
                  placeholder="Insert image URL"
                />
                <button className="form-new-meal"> Add </button>
              </form>
            </div>
          ) : (
            <p>It's false{this.state.viewForm}</p>
          )}
        </div>

        <div>
          {this.state.meals.map((meal) => {
            return (
              <MealBox
                key={meal.name}
                name={meal.name}
                calories={meal.calories}
                image={meal.image}
                onChange={this.handleInputChange}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

{
  /* <form>
  <input className="no-border" type="number" value="1" name="calories" onChange={this.handleInputChange} />
  <button onClick={this.newMeal}> Add </button>
</form> */
}
