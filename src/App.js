import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import Radium, { StyleRoot } from 'radium';



class App extends Component {
  state = {
    persons: [
      { id: '0000', name: 'Dave', age: 38},
      { id: '0001', name: 'Davina', age: 34},
      { id: '0002', name: 'Luke', age: 40},
      { id: '0003', name: 'Test', age: 1212}
    ],
    showPersons: false,
    inputText: ''
  }



  deletePersonHandler = (personIndex) => {
    //!const persons = this.state.persons.slice(); this essentially fetches the persons array and we use slice so it starts a new array. the best way to do this is below with the spread operator:
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1); //!this will be passed index from map() and will determine wich index to delete & setState updates the state. 
    this.setState({
      persons: persons
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    // const person = this.state.persons[personIndex]; better approach below:
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    //!This is how ya get it to toggle back n forth! This is fucking good stuff man 9-13-18
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  handleChangeInput = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }


  render() {
    //! Inline styles:
    const buttonStyle = {
      width: 150,
      height: 50,
      fontSize: 20,
      borderRadius: 5,
      backgroundColor: 'green',
      color: 'white',
      margin: 30,
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    //! End of Inline styles

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
            {this.state.persons.map((person, index) => {
              return  <Person 
                delete={() => this.deletePersonHandler(index)} //adding an index as arg it lets us know which index to delete
                name={person.name}
                age={person.age}
                key={person.id} //instead of index, adding an id to the original state is a good idear.
                changed={(event) => this.nameChangedHandler(event, person.id)}
                />
            })}
        </div> 
      );
      buttonStyle.backgroundColor = 'red';
    }

    //!Going to set the style of <p> dynamically
    let classes = [];
    if(this.state.persons.length <= 2) {
     classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Vid Trent & His Delerium Site</h1>
        <p className={classes.join(' ')}>How ya like me meow!</p>
        <button 
          style={buttonStyle}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        <input 
          className="appInput" 
          onChange={this.handleChangeInput}
          length={this.state.inputText.length}
          />
          <p>{this.state.inputText}</p>
        {persons} {/*This will display the above <div>'s with <Person />'s if true, displays nothing if false!*/}
      </div>
    // </StyleRoot>
    );
  }
}

export default App;
