import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    //!Going to set the style of <p> dynamically
    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>Vid Trent & His Delerium Tremens</h1>

            <p 
              className={assignedClasses.join(' ')}>How ya like me meow!</p>
            <button
              className={btnClass} 
              onClick={props.clicked}>Toggle Persons</button>
        </div>
        );
}

export default Cockpit;