import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//! Inline styles:
const button = {
  width: 150,
  height: 50,
  fontSize: 20,
  borderRadius: 5,
  background: 'floralwhite',
  margin: 30
}

//! End of Inline styles

class App extends Component {

  state = {
    persons: [
      {name: 'Dave', age: 38},
      {name: 'Davina', age: 34},
      {name: 'Luke', age: 40}
    ]
  }

  handleClick = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 38},
        {name: 'Davina', age: 35},
        {name: 'Luke', age: 40}
      ]
      
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Dave', age: 38},
        {name: event.target.value, age: 34},
        {name: 'Luke', age: 40}
      ]
    });
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working, meow!</p>
        <button 
          style={button}
          onClick={() => this.handleClick('new name arguement')}>Switch Name!</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          clicked={this.handleClick.bind(this, ' A Fucking Prop Yo!')}
          changed={this.nameChangedHandler}>My Hobbies: Gym!</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
        </div>

    );
  }
}

export default App;
