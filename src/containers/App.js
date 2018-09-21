import React, { PureComponent } from 'react';
import classes from './App.css';
import PersonList from '../components/Persons/PersonList';
// import Radium, { StyleRoot } from 'radium';
// import Person from '../components/Persons/Person/Person';
import Cockpit from '../components/Cockpit/Cockpit';
import TestInput from '../components/TestInput/TestInput';
// import Footer from '../components/Footer/Footer';
import WithClass from '../hoc/WithClass';




class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: '0000', name: 'Dave', age: 38},
        { id: '0001', name: 'Davina', age: 34},
        { id: '0002', name: 'Luke', age: 40},
        { id: '0003', name: 'Test', age: 1212}
      ],
      showPersons: false,
      inputText: '',
      toggleCounter: 0,
      authenticated: false
    }
  }

  deletePersonHandler = (personIndex) => {
    //!const persons = this.state.persons.slice(); this essentially fetches the persons array and we use slice so it starts a new array. the best way to do this is below with the spread operator:
    // const persons = [...this.state.persons]
    const persons = this.state.persons.slice();
    console.log(persons);
    persons.splice(personIndex, 1); //!this will be passed index from map() and will determine wich index to delete & setState updates the state. 
    this.setState({
      persons: persons
    });
    // console.log(this.state);
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
    //!This is how ya get it to toggle back n forth!
    //!To update the state in this manner is very tricky but it's the proper way. Look closely at this.
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleCounter: prevState.toggleCounter +1
      }
    });
  }



  handleChangeInput = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  loginHandler = () => {
    this.setState({
      authenticated: true
    })
  }




  render() {
    console.log('[App.js] Inside render');
    let persons = false;
    //!if true, show this...
    if(this.state.showPersons) {
      persons = <PersonList
              persons={this.state.persons}
              delete={this.deletePersonHandler}
              changed={this.nameChangedHandler}
              isAuthenticated={this.state.authenticated}
              />;
    }

    
    return (
      <WithClass passOnClasses={classes.App}>
        <button 
          onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          toggleClicked={this.state.toggleCounter} 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        <TestInput 
          passingAlongClassName={classes.appInput}
          changeThisBiatch={this.handleChangeInput}
          length={this.state.inputText.length}
          inputText={this.state.inputText}
        />
        {persons} {/*! show this if false! meaning it will show nothing.*/}
      {/* <Footer /> */}
      </WithClass>
    );
  }
}

export default App;
