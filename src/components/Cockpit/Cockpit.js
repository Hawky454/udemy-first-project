import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = (props) => {
    //!Going to set the style of <p> dynamically
    const assignedClasses = [];
    let btnClass = classes.Button;

    if(props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return(
        <Aux>
            <h1>{props.appTitle}</h1>

            <p 
              className={assignedClasses.join(' ')}>How ya like me meow!</p>
            <button
              className={btnClass} 
              onClick={props.clicked}>Toggle Persons</button>
              <br/>
              <small>{props.toggleClicked}</small>
              <br/>
              <button onClick={props.login}>Log In</button>
        </Aux>
        );
}

export default Cockpit;