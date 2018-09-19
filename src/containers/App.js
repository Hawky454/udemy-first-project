import React, { Component } from 'react';
import classes from './App.css';
import PersonList from '../components/Persons/PersonList';
// import Radium, { StyleRoot } from 'radium';
// import Person from '../components/Persons/Person/Person';
import Cockpit from '../components/Cockpit/Cockpit';






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
    console.log(this.state);
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
    let persons = false;
    
    console.log('persons: (put here by davidJohnMiller', persons);
    //!if true, show this...
    if(this.state.showPersons) {
      persons = <PersonList
              persons={this.state.persons}
              delete={this.deletePersonHandler}
              changed={this.nameChangedHandler}/>;
      console.log('persons: (put here by davidJohnMiller', persons);
    }

    
    return (
      // <StyleRoot>
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        <input 
          className={classes.appInput} 
          onChange={this.handleChangeInput}
          length={this.state.inputText.length}
          />
          <p>{this.state.inputText}</p>
        {persons} {/*! show this if false! meaning it will show nothing.*/}
      </div>
    // </StyleRoot>
    );
  }
}

export default App;
