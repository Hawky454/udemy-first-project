import React from 'react';
import classes from './Person.css';




const Person = (props) => { 

    return(
        <div
        className={classes.Person}>
          <p 
            onClick={props.delete}>I'm {props.name} and I am {props.age} years old! (pssst, I am the person component)</p>
          <p>{props.children}</p>
          <input 
            value={props.name}
            onChange={props.changed}
            className={classes.input}
            type="text" />
        </div>
    );
}; 
        
export default Person;