import React from 'react';
import './Person.css';



const Person = (props) => {

    return(
        <div className="Person">
          <p 
            onClick={props.clicked}>I'm {props.name} and I am {props.age} years old!</p>
          <p>{props.children}</p>
          <input 
            onChange={props.changed}
            value={props.name}
            className="input"
            type="text" />
        </div>
    );
};

export default Person;