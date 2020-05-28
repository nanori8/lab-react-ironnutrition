import React, { Component } from 'react';

const MealBox = (props) => {
  return (
    <div className="meal-box">
      <img className="img-small" src={props.image} alt={props.image} />
      <div className="meal-details">
        <h5> {props.name} </h5>
        <small>{props.calories} cal</small>
      </div>
      <form >
          <input className="no-border" type="number" value="1" />
          <button >+</button>
        </form>

    </div>
  );
};

export default MealBox;