import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {name: 'Dave', age: 38},
      {name: 'Davina', age: 34},
      {name: 'Luke', age: 40}
    ],
    showPersons: false
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

  togglePersonsHandler = () => {
    //!This is how ya get it to toggle back n forth! This is fucking good stuff man 9-13-18
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }


  render() {
    //! Inline styles:
    const buttonStyle = {
      width: 150,
      height: 50,
      fontSize: 20,
      borderRadius: 5,
      background: 'floralwhite',
      margin: 30
    }
    //! End of Inline styles

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              clicked={this.handleClick.bind(this, ' Bibbidy Bibbidy Bop!')}
              changed={this.nameChangedHandler}>My Hobbies: Gym!</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
          </div> 
      );
    }

    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working, meow!</p>
      <button 
      style={buttonStyle}
      onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons} {/*This will display the above <div>'s with <Person />'s if true, displays nothing if false!*/}
      </div>

    );
  }
}

export default App;
