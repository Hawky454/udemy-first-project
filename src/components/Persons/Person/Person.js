import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';



//! when using props in a class component you have to call it by using this.
class Person extends Component { 



    render() {
        

    return(
        <WithClass
          passOnClasses={classes.Person}>
          <p 
            onClick={this.props.deleteThis}>I'm {this.props.name} and I am {this.props.age} years old! (pssst, I am the person component)</p>
          <p>{this.props.children}</p>
          <input 
            value={this.props.name}
            onChange={this.props.changed}
            className={classes.input}
            type="text" />
        </WithClass>
    );
  }
}; 
        
export default Person;