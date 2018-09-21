import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
// import Aux from '../../../hoc/Aux';



//! when using props in a class component you have to call it by using this.
class Person extends Component { 
    constructor(props) {
        super(props);
        this.state = {}
    }
   
    componentDidMount() {
        if (this.props.position === 0) {
          this.inputElement.focus();
        }
    }


    render() {
        
        //!Since this is a class component you will see that props uses the keyword this in front of it as apposed to when you just use a stateless component
    return(
        <WithClass
          passOnClasses={classes.Person}>
          {this.props.authenticated ? <p>I'm authenticated</p> : null}
          <p onClick={this.props.deleteThis}>I'm {this.props.name} and I am {this.props.age} years old! (pssst, I am the person component)</p>
          <p>{this.props.children}</p>
          <input
            ref={(input) => {this.inputElement = input}} 
            value={this.props.name}
            onChange={this.props.changed}
            className={classes.input}
            type="text" />
        </WithClass>
    );
  }
}; 

Person.propTypes = {
    deleteThis: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
        
export default Person;